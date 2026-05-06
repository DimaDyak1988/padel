import * as v from 'valibot';

export const UserRoleSchema = v.picklist(['admin', 'player', 'coach'], 'Неверная роль');
export const UserSchema = v.object({
  id: v.pipe(
    v.string(),
    v.minLength(1, 'Id не может быть пустым'),
  ),
  name: v.pipe(
    v.string(),
    v.minLength(2, 'Имя слишком короткое'),
    v.trim(),
  ),
  role: UserRoleSchema,
  contact: v.pipe(
    v.string(),
    v.minLength(3, 'Контакт должен быть длиннее 3 символов'),
  ),
  rating: v.pipe(
    v.number('Должно быть числом'),
    v.minValue(0),
    v.maxValue(5),
  ),
  avatar: v.optional(v.pipe(v.string(), v.url('Неверный формат ссылки'))),
});

export type UserRole = v.InferOutput<typeof UserRoleSchema>;
export type User = v.InferOutput<typeof UserSchema>;
