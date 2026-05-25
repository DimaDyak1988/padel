import { ref } from 'vue';
import { userApi, type User, userAvatarService } from '@/entities/user';

export function useRemoveUser() {
  const isPending = ref(false);

  async function handleRemoveUser(userId: User['id']) {
    try {
      isPending.value = true;
      const deletedUser = await userApi.deleteUser(userId);
      if (deletedUser.avatar) await userAvatarService.removeOldAvatar(deletedUser.avatar);
    }
    finally {
      isPending.value = false;
    }
  }

  return {
    isPending,
    handleRemoveUser,
  };
}
