import { type User } from '../model/types';
import mockData from '../model/mockData';
import { useLocalStorage  } from '@/shared/composables/useLocalStorage';
import { type USERS_SCHEMA } from '@/entities/user/config/constants';

const { getLocalStorageItem } = useLocalStorage<USERS_SCHEMA>();


export function getUsers(): Promise<User[]> {
  return new Promise<User[]>((resolve) => {
    const localStorageUsers = getLocalStorageItem('users');
    const data: User[] = localStorageUsers || mockData;

    setTimeout(() => {
      resolve(data);
    }, 1200);
  });
}
