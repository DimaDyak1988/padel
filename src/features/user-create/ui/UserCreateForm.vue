<template>
  <UserForm
    :initial-form="initialForm"
    submit-name="Создать пользователя"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
import { UserForm } from '@/entities/user';
import { useCreateUser } from '../model/useCreateUser';

defineOptions({ name: 'UserCreateForm' });

const { initialForm, handleSubmit  } = useCreateUser();
</script>
