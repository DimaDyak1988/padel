import { ref } from 'vue';
import {
  userApi,
  userAvatarService,
  buildUserCreateRequest,
  type CreateUserPayload,
  type UserFormModel,
} from '@/entities/user';

export function useCreateUser() {
  const isPending = ref(false);
  const initialForm = ref<UserFormModel>({
    name: '',
    lastName: '',
    contact: '',
    role: 'player',
    rating: 1,
    avatar: undefined,
  });

  async function createUser(payload: CreateUserPayload) {
    let uploadedAvatarPath: string | undefined = undefined;

    try {
      isPending.value = true;

      const dbUser = buildUserCreateRequest(payload);
      const createdUser = await userApi.createUser(dbUser);
      uploadedAvatarPath = await userAvatarService.tryUploadToBucket(createdUser.id, payload.avatar);
      await userApi.updateUser(createdUser.id, { avatar: uploadedAvatarPath });
    }
    catch (error) {
      if (uploadedAvatarPath) {
        await userAvatarService.rollbackUploadedAvatar(uploadedAvatarPath);
        throw error;
      }

      throw error;
    }
    finally {
      isPending.value = false;
    }
  }

  return {
    initialForm,
    isPending,
    createUser,
  };
}
