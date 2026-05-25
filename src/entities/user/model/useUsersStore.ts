import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '../model/types';
import { userApi } from '../api/index';
import { parseUserResponse } from '../model/mappers';

export const useUsersStore = defineStore('USERS_STORE', () => {
  const users = ref<User[]>([]);
  const isLoading = ref(false);

  async function fetchUsers(signal?: AbortSignal) {
    isLoading.value = true;

    try {
      users.value = (await userApi.getAllUsers(signal)).map(parseUserResponse);
    }
    finally {
      isLoading.value = false;
    }
  }

  function removeUser(userId: User['id']): void {
    users.value = users.value.filter(user => user.id !== userId);
  }

  return {
    users,
    isLoading,
    fetchUsers,
    removeUser,
  };
});
