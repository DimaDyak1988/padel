import type { User } from '../model/user';

export const USERS_STORE_NAME = 'USERS_STORE';

export type USERS_SCHEMA = {
  users: User[]
}
