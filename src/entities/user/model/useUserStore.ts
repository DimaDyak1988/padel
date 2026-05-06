import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from './user';
import { USERS_STORE_NAME } from '../constants';
import mockData from './mockData';

export const useUserStore = defineStore(USERS_STORE_NAME, () => {
  const users = ref<User[]>(mockData);

  window.localStorage.setItem('users', JSON.stringify(users));

  function removeUser(id: User['id']) {
    users.value = users.value.filter((user) => user.id !== id);
  }

  return {
    users,
    removeUser,
  };
});
