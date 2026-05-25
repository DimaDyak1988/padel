import { supabase } from '@/supabase';

export function getPublicFileUrl(bucketName: string, path: string | null): string | null {
  if (!bucketName) throw new Error('bucketName required');
  if (path === null || path === undefined) return null;

  const { data } = supabase.storage
    .from(bucketName)
    .getPublicUrl(path);

  return data.publicUrl;
}
