<template>
  <div class="update-user-form">
    <h3 v-if="isLoading">
      Загрузка пользователей...
      <ProgressBar
        mode="indeterminate"
        style="height: 12px"
      />
    </h3>

    <UserForm
      v-else-if="!isLoading && initialFormModel"
      :schema="UserFormSchema"
      :initial-form="initialFormModel"
      :is-pending="isPending"
      @submit="handleUpdateUser"
    />

    <RouterLink to="/users">
      Список пользователей
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { watch, onWatcherCleanup } from 'vue';
import ProgressBar from 'primevue/progressbar';
import type { UpdateUserPayload } from '@/entities/user';
import { UserFormSchema, UserForm } from '@/entities/user';
import { useRouteParam } from '@/shared/composables/useRouteParam';
import { useUpdateUserForm } from '../model/useUpdateUserForm';

const emit = defineEmits<{
  (e: 'update-success'): void,
  (e: 'update-failure', error: unknown): void,
  (e: 'fetch-user-failure', error: unknown): void,
}>();

const userId = useRouteParam('id');
const {
  isPending,
  isLoading,
  initialFormModel,
  fetchUser,
  updateUser,
} = useUpdateUserForm();

watch(userId, async (id) => {
  if (!id) return;
  const controller = new AbortController();
  onWatcherCleanup(() => { controller.abort(); });

  try {
    await fetchUser(id, controller.signal);
  }
  catch (error) {
    emit('fetch-user-failure', error);
  }
}, {
  immediate: true,
});

async function handleUpdateUser(user: UpdateUserPayload) {
  if (!userId.value) return;

  try {
    await updateUser(userId.value, user);
    emit('update-success');
  }
  catch (error) {
    emit('update-failure', error);
  }
}
</script>
