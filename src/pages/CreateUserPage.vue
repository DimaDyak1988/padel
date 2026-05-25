<template>
  <div class="create-user-page">
    <PageHeader>
      <h2>Создание нового пользователя</h2>
    </PageHeader>

    <CreateUserForm
      @create-success="handleSuccess"
      @create-failure="handleFailure"
    />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { CreateUserForm } from '@/features/create-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';
import { getErrorMessage } from '@/shared/lib/getErrorMessage';

const router = useRouter();
const toast = useToast();

function handleSuccess() {
  toast.add({
    severity: 'success',
    summary: 'Пользователь успешно создан!',
    life: 2000,
  });

  router.push({ name: 'users' });
}

function handleFailure(error: unknown) {
  toast.add({
    severity: 'error',
    summary: getErrorMessage(error),
    life: 4000,
  });
};
</script>

