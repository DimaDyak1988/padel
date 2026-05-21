<template>
  <div class="create-user-page">
    <PageHeader>
      <h2>Создание нового пользователя</h2>
    </PageHeader>

    <CreateUserForm />
  </div>
</template>
<script setup lang="ts">
import { CreateUserForm } from '@/features/create-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

defineOptions({ name: 'CreateUserPage' });
</script>

