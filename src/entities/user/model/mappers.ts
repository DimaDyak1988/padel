import type {
  UserCreateRequestDTO,
  UserResponseDTO,
  UserUpdateRequestDTO,
} from '@/entities/user/api/dto';
import type {
  CreateUserPayload,
  UpdateUserPayload,
} from '@/entities/user/model/types';
import type { User } from '@/entities/user';
import { omitUndefined } from '@/shared/lib/omitUndefined';
import { getPublicFileUrl } from '@/shared/lib/getPublicFileUrl';
import { extractStoragePathFromUrl } from '@/shared/lib/extractStoragePathFromUrl';
import { isPublicUrl } from '@/shared/lib/typeGuards';

export function parseUserResponse(dbUser: UserResponseDTO): User {
  const { last_name, avatar, created_at, updated_at, ...rest } = dbUser;

  return {
    ...rest,
    lastName: last_name,
    avatar: getPublicFileUrl('avatars', avatar),
    createdAt: created_at,
    updatedAt: updated_at,
  };
}

export function buildUserCreateRequest(user: CreateUserPayload): UserCreateRequestDTO  {
  const { lastName, ...rest } = user;

  return {
    ...rest,
    last_name: lastName,
    avatar: null, // загружается и прикрепляется отдельно
  };
}

export function buildUserUpdateRequest(user: UpdateUserPayload): UserUpdateRequestDTO  {
  return omitUndefined<UserUpdateRequestDTO>({
    name: user.name,
    last_name: user.lastName,
    contact: user.contact,
    role: user.role,
    rating: user.rating,
    avatar: prepareAvatar(user.avatar),
  });
};

function prepareAvatar(avatar: unknown): string | null {
  if (typeof avatar !== 'string') return null;
  if (isPublicUrl(avatar, 'avatars')) return extractStoragePathFromUrl('avatars', avatar);

  return avatar;
}
