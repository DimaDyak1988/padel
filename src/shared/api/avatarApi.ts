import { supabase } from '@/supabase';
import { nanoid } from 'nanoid';

export const avatarApi = {
  upload,
  remove,
};

function buildStoragePath(file: File, userId: string): string {
  const ext = file.name.split('.').pop() ?? 'jpg';
  return `${userId}/${nanoid(6)}.${ext}`;
}

type UploadedAvatar = {
  /** путь вида -  [userId]/[fileId].[mimetype] */
  path: string;
  /** полная ссылка - `https://vcnfvkrgvfuvveecbdgv.supabase.co/storage/v1/object/public/avatars/{path}`*/
  publicUrl: string;
}

export async function upload(
  file: File,
  userId: string,
  validateFn?: (file: File) => void,
): Promise<UploadedAvatar> {

  if (validateFn && typeof validateFn === 'function') {
    validateFn(file);
  }

  const storagePath = buildStoragePath(file, userId);

  const { data, error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(storagePath, file, {
      upsert: false,
      cacheControl: '3600',
    });

  if (uploadError) {
    throw new AvatarUploadError(
      `Ошибка при загрузке аватара: ${uploadError.message}`,
      'UPLOAD',
      uploadError,
    );
  }

  const { data: urlData } = supabase.storage
    .from('avatars')
    .getPublicUrl(data.path);

  return {
    path: data.path,
    publicUrl: urlData.publicUrl,
  };
}

export async function remove(path: string): Promise<void> {
  const { error: removeError } = await supabase.storage
    .from('avatars')
    .remove([path]);

  if (removeError) {
    throw new AvatarUploadError('Возникла проблема при удалении аватара', 'DELETE', removeError);
  }
}

// Remove from here
export class AvatarUploadError extends Error {
  constructor(
    message: string,
    public code: 'VALIDATION' | 'UPLOAD' | 'DATABASE' | 'DELETE',
    public originalError?: unknown,
  ) {
    super(message);
    this.name = 'AvatarUploadError';
  }
}
