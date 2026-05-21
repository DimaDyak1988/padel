import { ref } from 'vue';
import { type User, useUserStore } from '@/entities/user';

export function useRemoveUser() {
  const userStore = useUserStore();
  const isPending = ref(false);

  async function handleRemoveUser(userId: User['id']) {
    try {
      isPending.value = true;
      await userStore.removeUser(userId);
    }
    catch (error) {
      console.error(error);
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
