<template>
  <div class="update-user-form">
    <UserForm
      v-if="userFormModel"
      :schema="UserFormSchema"
      :initial-form="userFormModel"
      :is-pending="isPending"
      @submit="handleUpdateUser"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { UserForm } from '@/entities/user';
import { type UpdateUser, UserFormSchema } from '@/entities/user';
import { useUpdateUser } from '@/features/update-user';
import { useUserForm } from '@/features/update-user';
import { useRouteParam } from '@/shared/lib/useRouteId';

defineOptions({ name: 'UpdateUserForm' });

const router = useRouter();
const toast = useToast();
const userId = useRouteParam('id');

const { isPending, updateUser } = useUpdateUser(userId);
const { userFormModel } = useUserForm(userId);

async function handleUpdateUser(updatedUser: UpdateUser) {
  try {
    await updateUser(updatedUser);
    toast.add({
      severity: 'success',
      summary: 'Данные пользователя изменены!',
      life: 3000,
    });
    router.push({ name: 'users' });
  }
  catch (error) {
    console.error(error);
  }
}
</script>
