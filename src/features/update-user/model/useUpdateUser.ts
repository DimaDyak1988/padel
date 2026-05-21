import { ref  } from 'vue';
import type { Ref } from 'vue';
import type { UpdateUser } from '@/entities/user';
import { useUserStore } from '@/entities/user';

export const useUpdateUser = (userId: Ref<string | undefined>) => {
  const userStore = useUserStore();
  const isPending = ref(false);

  async function updateUser(patch: UpdateUser): Promise<void> {
    try {
      isPending.value = true;

      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

      if (!userId.value) return;

      await userStore.updateUser(userId.value, patch);
    }
    catch (error) {
      console.error(error);
    }
    finally {
      isPending.value = false;
    }
  }

  return {
    userId,
    isPending,
    updateUser,
  };
};
