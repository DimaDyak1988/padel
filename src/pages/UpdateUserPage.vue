<template>
  <div class="update-user-page">
    <PageHeader>
      <h2>Изменить данные пользователя</h2>
    </PageHeader>

    <UpdateUserForm />
  </div>
</template>
<script setup lang="ts">
import { UpdateUserForm } from '@/features/update-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

defineOptions({ name: 'UpdateUserPage' });
</script>
