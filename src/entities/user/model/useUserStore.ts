import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from './user';
import { USERS_STORE_NAME, USERS_SCHEMA } from './constants';
import mockData from './mockData';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';

const { setLocalStorageItem, getLocalStorageItem } = useLocalStorage<USERS_SCHEMA>();

export const useUserStore = defineStore(USERS_STORE_NAME, () => {
  const users = ref<User[]>([]);

  const localStorageUsers = getLocalStorageItem('users');

  if (localStorageUsers) {
    users.value = localStorageUsers;
  }
  else {
    users.value = mockData;
  }

  function removeUser(id: User['id']) {
    users.value = users.value.filter((user) => user.id !== id);
    setLocalStorageItem('users', users.value);
  }

  function getUserByRole(role: string) {
    users.value = users.value.filter((user) => user.role === role);
  }

  return {
    users,
    removeUser,
    getUserByRole,
  };
});
