import type { User } from '@/entities/user';
import { isFile } from '@/shared/lib/typeGuards';
import { avatarApi } from '@/shared/api/avatarApi';

export const userAvatarService = {
  tryUploadToBucket,
  tryRemoveOldAvatar,
  rollbackUploadedAvatar,
  removeOldAvatar,
};

type UserServiceAvatar = File | string | null

async function tryUploadToBucket(userId: User['id'], avatar?: UserServiceAvatar): Promise<string | undefined> {
  if (!isFile(avatar)) return;

  const { path } = await avatarApi.upload(avatar, userId);

  return path;
}

async function removeOldAvatar(oldAvatarPath: string | null): Promise<void> {
  if (!oldAvatarPath) return;

  await avatarApi.remove(oldAvatarPath);
}

async function tryRemoveOldAvatar(
  avatar?: UserServiceAvatar,
  oldAvatar?: string | null,
): Promise<void> {
  const isChanging = isFile(avatar) || avatar === null;

  if (!oldAvatar || !isChanging) return;

  await removeOldAvatar(oldAvatar);
}

async function rollbackUploadedAvatar(avatarPath: string): Promise<void> {
  await avatarApi.remove(avatarPath);
}
