import { ref  } from 'vue';
import * as v from 'valibot';
import { useSingleUserStore, UserFormSchema } from '@/entities/user';
import type {
  User,
  UserFormModel,
  UpdateUserPayload,
} from '@/entities/user';
import { updateUserService  } from '../model/updateUserService';


export const useUpdateUserForm = () => {
  const userStore = useSingleUserStore();
  const initialFormModel = ref<UserFormModel | null>(null);
  const isPending = ref(false);

  async function fetchUser(userId: User['id'], signal?: AbortSignal): Promise<void> {
    if (!userId) throw new Error('Не передан userId');

    await userStore.fetchUser(userId, signal);
    const parsedUser = v.safeParse(UserFormSchema, userStore.user);

    if (!parsedUser.success) {
      throw new Error(`Ошибка при чтении пользователя: ${parsedUser.issues.map(iss => '\n' + iss.message)}`);
    }

    initialFormModel.value = parsedUser.output;
  }

  async function updateUser(userId: User['id'], patch: UpdateUserPayload) {
    try {
      isPending.value = true;
      await updateUserService(userId, patch);
    }
    finally {
      isPending.value = false;
    }
  }

  return {
    isPending,
    isLoading: userStore.isLoading,
    initialFormModel,
    fetchUser,
    updateUser,
  };
};
