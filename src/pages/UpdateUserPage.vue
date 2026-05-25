<template>
  <div class="update-user-page">
    <PageHeader>
      <h2>Изменить данные пользователя</h2>
    </PageHeader>

    <UpdateUserForm
      @update-success="handleSuccessUpdate"
      @update-failure="handleFailure"
      @fetch-user-failure="handleFailure"
    />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { UpdateUserForm } from '@/features/update-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';
import { getErrorMessage } from '@/shared/lib/getErrorMessage';

const router = useRouter();
const toast = useToast();

function handleFailure(error: unknown) {
  toast.add({
    severity: 'error',
    summary: getErrorMessage(error),
    life: 4000,
  });
}

function handleSuccessUpdate() {
  toast.add({
    severity: 'success',
    summary: 'Данные пользователя изменены!',
    life: 2000,
  });

  router.push({ name: 'users' });
}
</script>
