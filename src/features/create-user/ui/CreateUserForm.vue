<template>
  <UserForm
    :schema="UserFormSchema"
    :initial-form="initialForm"
    :is-pending="isPending"
    has-reset-button
    @submit="handleCreateUser"
  />
</template>

<script lang="ts" setup>
import { UserFormSchema, UserForm, type CreateUserPayload } from '@/entities/user';
import { useCreateUser } from '../model/useCreateUser';

const emit = defineEmits<{
  (e: 'create-success'): void,
  (e: 'create-failure', error: unknown): void,
}>();

const {
  initialForm,
  isPending,
  createUser,
} = useCreateUser();

async function handleCreateUser(user: CreateUserPayload) {
  try {
    await createUser(user);
    emit('create-success');
  }
  catch(error) {
    emit('create-failure', error);
  }
}
</script>
