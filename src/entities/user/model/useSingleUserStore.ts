import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from '../model/types';
import { userApi } from '../api/index';
import { parseUserResponse } from '../model/mappers';

export const useSingleUserStore = defineStore('SINGLE_USER_STORE', () => {
  const user = ref<User | null>(null);
  const isLoading = ref(false);

  async function fetchUser(id: User['id'], signal?: AbortSignal): Promise<void> {
    try {
      isLoading.value = true;
      const dbUser = await userApi.getUser(id, signal);
      if (!dbUser) throw new Error('Пользователь не найден');

      user.value = parseUserResponse(dbUser);
    }
    finally {
      isLoading.value = false;
    }
  }

  return {
    user,
    isLoading,
    fetchUser,
  };
});
