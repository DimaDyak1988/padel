import { defineStore } from 'pinia';
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import type { User } from './types';
import { USERS_STORE_NAME, USERS_SCHEMA } from '../config/constants';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';
import { getUsers } from '../api';

const { setLocalStorageItem  } = useLocalStorage<USERS_SCHEMA>(); // Убрать отсюда

export const useUserStore = defineStore(USERS_STORE_NAME, () => {
  const users = ref<User[]>([]);
  const isLoading = ref(false);

  async function fetchUsers() {
    isLoading.value = true;
    try {
      users.value =  await getUsers();
    } finally {
      isLoading.value = false;
    }
  }

  async function addUser(user: Omit<User, 'id'>) {
    try {
      users.value.push({ ...user, id: nanoid(4) });
      setLocalStorageItem('users', users.value); // Убрать отсюда
    }
    catch (error) {
      console.error(error);
    }

  }

  async function removeUser(id: User['id']) {
    users.value = users.value.filter((user) => user.id !== id);
    setLocalStorageItem('users', users.value);
  }

  return {
    users,
    isLoading,
    fetchUsers,
    addUser,
    removeUser,
  };
});
