import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from './user';
import { USERS_STORE_NAME, USERS_SCHEMA } from '../config/constants';
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

  function addUser() {
    users.value.push({
      id: Date.now().toString(),
      contact: 'New  Player',
      name: `Мария Петрова ${Date.now()}`,
      role: 'player',
      rating: 4,
      avatar: 'https://i.pravatar.cc/100?img=2',
    });

    setLocalStorageItem('users', users.value);
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
    addUser,
    removeUser,
    getUserByRole,
  };
});
