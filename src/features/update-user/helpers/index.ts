import type { User, UserFormModel } from '@/entities/user';

export function toUserFormModel(user: User): UserFormModel {
  const { id, ...rest } = user;

  return rest;
}
