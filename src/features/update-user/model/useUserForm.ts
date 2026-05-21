import { computed } from 'vue';
import type { Ref } from 'vue';
import { useUserStore } from '@/entities/user';
import type { UserFormModel } from '@/entities/user';
import { toUserFormModel } from '../helpers';

export function useUserForm(userId: Ref<string | undefined>) {
  const userStore = useUserStore();

  const userFormModel = computed<UserFormModel | undefined>(() => {
    if (!userId.value) return undefined;
    const user = userStore.findUserById(userId.value);

    if (!user) return undefined;

    return toUserFormModel(user);
  });

  return {
    userFormModel,
  };
}
