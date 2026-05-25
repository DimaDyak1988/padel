import type { Database } from '@/types/database';

export type UserResponseDTO = Database['public']['Tables']['users']['Row'];
export type UserCreateRequestDTO = Database['public']['Tables']['users']['Insert']
export type UserUpdateRequestDTO = Database['public']['Tables']['users']['Update']
