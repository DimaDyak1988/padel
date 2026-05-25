import {
  userApi,
  buildUserUpdateRequest,
  userAvatarService,
  type UpdateUserPayload,
  type User,
  type UserResponseDTO,
} from '@/entities/user';

type PrepareAndUpdateUserPayload = {
  userId: User['id'];
  patch: UpdateUserPayload;
  uploadedAvatarPath: string | undefined;
}

export async function updateUserService(
  userId: User['id'],
  patch: UpdateUserPayload,
): Promise<void> {
  let uploadedAvatarPath: string | undefined = undefined;

  try {
    const oldAvatarPath = await userApi.getUserAvatar(userId);
    uploadedAvatarPath = await userAvatarService.tryUploadToBucket(userId, patch.avatar);
    await prepareAndUpdateUser({ userId, patch, uploadedAvatarPath });
    await userAvatarService.tryRemoveOldAvatar(patch.avatar, oldAvatarPath);
  }
  catch (error) {
    if (uploadedAvatarPath) {
      await userAvatarService.rollbackUploadedAvatar(uploadedAvatarPath);
      throw error;
    }
    throw error;
  }
}

async function prepareAndUpdateUser({
  userId,
  patch,
  uploadedAvatarPath,
}: PrepareAndUpdateUserPayload): Promise<UserResponseDTO> {
  const dbUser = buildUserUpdateRequest({
    ...patch,
    ...(uploadedAvatarPath && { avatar: uploadedAvatarPath }),
  });

  return userApi.updateUser(userId, dbUser);
}


