import { defineStore } from 'pinia';
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import type { CreateUser, UpdateUser, User } from './types';
import { USERS_STORE_NAME, type USERS_SCHEMA } from '../config/constants';
import { useLocalStorage } from '@/shared/composables/useLocalStorage';
import { getUsers } from '../api';

// TODO вынести в отдельный слой
const { setLocalStorageItem } = useLocalStorage<USERS_SCHEMA>(); // Убрать отсюда

export const useUserStore = defineStore(USERS_STORE_NAME, () => {
  const users = ref<User[]>([]);
  const isLoading = ref(false);

  async function fetchUsers() {
    isLoading.value = true;
    try {
      users.value =  await getUsers();
    }
    finally {
      isLoading.value = false;
    }
  }

  async function createUser(user: CreateUser) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      users.value.push({ ...user, id: nanoid(4) });
      setLocalStorageItem('users', users.value); // Убрать отсюда
    }
    catch (error) {
      console.error(error);
    }
  }

  async function updateUser(userId: User['id'], patch: UpdateUser) {
    users.value = users.value.map(user => {

      if (user.id !== userId) return user;
      return {
        ...user,
        ...patch,
        id: userId,
      };
    });

    setLocalStorageItem('users', users.value);
  }

  async function removeUser(id: User['id']) {
    await new Promise(resolve => setTimeout(resolve, 1500));

    users.value = users.value.filter((user) => user.id !== id);
    setLocalStorageItem('users', users.value);
  }

  function findUserById(userId: User['id']): User | undefined {
    return users.value.find((user) => user.id === userId);
  }

  return {
    users,
    isLoading,
    fetchUsers,
    createUser,
    updateUser,
    removeUser,
    findUserById,
  };
});
