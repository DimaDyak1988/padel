import type { UserRole } from './userRole';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  contact: string;
  rating: number;
  avatar?: string;
}
