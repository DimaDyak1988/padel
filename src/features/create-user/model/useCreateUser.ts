import { ref } from 'vue';
import  type { CreateUser, UserFormModel } from '@/entities/user';
import { useUserStore } from '@/entities/user';

export function useCreateUser() {
  const userStore = useUserStore();
  const isPending = ref(false);

  const userForm = ref<UserFormModel>({
    name: '',
    lastName: '',
    contact: '',
    role: 'player',
    rating: 1,
  });

  async function createUser(user: CreateUser) {
    try {
      isPending.value = true;
      await userStore.createUser(user);
    }
    catch (error) {
      console.error(error);
      throw error;
    }
    finally {
      isPending.value = false;
    }
  }

  return {
    userForm,
    isPending,
    createUser,
  };
}
