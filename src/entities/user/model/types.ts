import * as v from 'valibot';

export const UserRoleSchema = v.picklist(['admin', 'player', 'coach']);
export type UserRole = v.InferOutput<typeof UserRoleSchema>;

const UserBaseSchema = v.object({
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
  ...UserBaseSchema.entries,
});
export type User = v.InferOutput<typeof UserSchema>;

export const UserFormSchema = UserBaseSchema;
export type UserFormModel = v.InferOutput<typeof UserFormSchema>;

export type CreateUser = UserFormModel;
export type UpdateUser = Partial<UserFormModel>
