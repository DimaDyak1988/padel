<template>
  <div class="create-user-page">
    <PageHeader>
      <h2>Создание нового пользователя</h2>
    </PageHeader>

    <UserCreateForm />
  </div>
</template>
<script setup lang="ts">
import { UserCreateForm } from '@/features/user-create';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

defineOptions({ name: 'CreateUserPage' });
</script>

