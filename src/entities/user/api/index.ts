import { supabase } from '@/supabase';
import type { User } from '../model/types';
import type {
  UserResponseDTO,
  UserCreateRequestDTO,
  UserUpdateRequestDTO,
} from './dto';

export const userApi = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserAvatar,
};

export async function getAllUsers(signal?: AbortSignal): Promise<UserResponseDTO[]> {
  let query = supabase.from('users').select();
  if (signal) query = query.abortSignal(signal);

  const { data, error } = await query;

  if (signal?.aborted) return [];
  if (error) throw new Error('Ошибка получения пользователей');

  return data ?? [];
}

export async function getUser(id: User['id'], signal?: AbortSignal): Promise<UserResponseDTO | null> {
  let query = supabase.from('users').select().eq('id', id);
  if (signal) query = query.abortSignal(signal);

  const { data, error } = await query.maybeSingle();

  if (signal?.aborted) return null;
  if (error) throw new Error('Ошибка при поиске пользователя');

  return data;
}

export async function createUser(user: UserCreateRequestDTO): Promise<UserResponseDTO> {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select()
    .single();

  if (error) throw new Error('Ошибка при создании пользователя');

  return data;
}

export async function deleteUser(id: User['id']): Promise<UserResponseDTO> {
  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', id)
    .select();

  if (error) throw new Error('Ошибка при удалении пользователя');

  return data[0];
}

export async function updateUser(
  id: User['id'],
  user: UserUpdateRequestDTO,
): Promise<UserResponseDTO> {
  const { data, error } = await supabase
    .from('users')
    .update(user)
    .eq('id', id)
    .select();

  if (error) throw new UserError(error.message, 'UPDATE', error);

  return data[0];
}

export async function getUserAvatar(userId: User['id']): Promise<string | null> {
  const { data, error } = await supabase
    .from('users')
    .select('avatar')
    .eq('id', userId)
    .maybeSingle();

  if (error) throw new Error(`Ошибка получения аватара: ${error.message}`);

  return data?.avatar ?? null;
}


// TODO Remove from here
export class UserError extends Error {
  constructor(
    message: string,
    public code: 'CREATE' | 'UPDATE' | 'DELETE',
    public originalError?: unknown,
  ) {
    super(message);
    this.name = 'UserError';
  }
}
