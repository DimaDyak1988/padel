import type { User } from '../model/types';

export const USERS_STORE_NAME = 'USERS_STORE';

export type USERS_SCHEMA = {
  users: User[]
}

export const roleOptions = [
  { name: 'Игрок', id: 'player' },
  { name: 'Администратор', id: 'admin' },
  { name: 'Тренер', id: 'coach' },
];
