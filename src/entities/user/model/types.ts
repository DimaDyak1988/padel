import * as v from 'valibot';

export const UserRoleSchema = v.picklist(['admin', 'player', 'coach'], 'Неверная роль');
export const UserCreateSchema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(1, 'Обязательно для заполнения'),
    v.minLength(2, 'Имя слишком короткое'),
    v.trim(),
  ),
  lastName: v.pipe(
    v.string(),
    v.minLength(1, 'Обязательно для заполнения'),
    v.trim(),
  ),
  role: UserRoleSchema,
  contact: v.pipe(
    v.string(),
    v.minLength(3, 'Контакт должен быть длиннее 3 символов'),
  ),
  rating: v.pipe(
    v.number('Должно быть числом'),
    v.minValue(1, 'Рейтинг должен быть не меньше 1'),
    v.maxValue(6, 'Рейтинг должен быть не больше 6'),
  ),
  avatar: v.optional(v.pipe(v.string(), v.url('Неверный формат ссылки'))),
});

export const UserSchema = v.object({
  id: v.string(),
  ...UserCreateSchema.entries,
});

export type UserRole = v.InferOutput<typeof UserRoleSchema>;
export type UserCreate = v.InferOutput<typeof UserCreateSchema>;
export type UserUpdate = v.InferOutput<typeof UserSchema>;
export type User = v.InferOutput<typeof UserSchema>;
