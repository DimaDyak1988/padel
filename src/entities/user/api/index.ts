import { type User } from '../model/types';
import mockData from '../model/mockData';
import { useLocalStorage  } from '@/shared/composables/useLocalStorage';
import { USERS_SCHEMA } from '@/entities/user/config/constants';

const { getLocalStorageItem } = useLocalStorage<USERS_SCHEMA>();


export function getUsers(): Promise<User[]> {
  return new Promise<User[]>((resolve) => {
    const localStorageUsers = getLocalStorageItem('users');
    const data: User[] = localStorageUsers || mockData;

    const randomDelay = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;

    setTimeout(() => {resolve(data);}, randomDelay);
  });
}
