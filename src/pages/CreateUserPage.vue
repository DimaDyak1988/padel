<template>
  <div class="user-create-page">
    <PageHeader>
      <h2>Создание нового пользователя</h2>
    </PageHeader>

    <UserCreate />
  </div>
</template>
<script setup lang="ts">
import { UserCreate } from '@/features/user-create';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

defineOptions({ name: 'CreateUserPage' });
</script>

