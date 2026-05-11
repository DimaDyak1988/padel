import { ref } from 'vue';
import { type UserCreate } from '@/entities/user';
import { useUserStore } from '@/entities/user';


export function useCreateUser() {
  const userStore = useUserStore();

  const initialForm = ref<UserCreate>({
    name: '',
    lastName: '',
    contact: '',
    role: 'player',
    rating: 1,
  });

  async function handleSubmit(user: UserCreate, reset: () => void) {
    try {
      await userStore.addUser(user);
      reset();
    }
    catch (error) {}
  }

  return {
    initialForm,
    handleSubmit,
  };
}
