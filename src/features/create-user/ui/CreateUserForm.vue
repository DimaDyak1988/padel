<template>
  <UserForm
    ref="formRef"
    :schema="UserFormSchema"
    :initial-form="userForm"
    :is-pending="isPending"
    has-reset-button
    @submit="handleCreateUser"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import { UserFormSchema, UserForm } from '@/entities/user';
import type { CreateUser } from '@/entities/user';
import { useCreateUser } from '../model/useCreateUser';

defineOptions({ name: 'CreateUserForm' });

const router = useRouter();
const toast = useToast();
const formRef = ref(null);

const {
  userForm,
  isPending,
  createUser,
} = useCreateUser();

async function handleCreateUser(user: CreateUser) {
  try {
    await createUser(user);
    router.push({ name: 'users' });
    formRef.value?.reset();
  }
  catch(error) {
    toast.add({
      severity: 'error',
      summary: error.message,
      life: 3000,
    });
  }
}
</script>
