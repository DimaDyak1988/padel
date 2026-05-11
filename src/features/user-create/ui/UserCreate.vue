<template>
  <UserForm
    :initial-form="form"
    submit-name="Создать пользователя"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { type UserCreate, useUserStore } from '@/entities/user';
import { UserForm } from '@/entities/user';

defineOptions({ name: 'UserCreate' });

const userStore = useUserStore();
const form = ref<UserCreate>({
  name: '',
  lastName: '',
  contact: '',
  role: 'player',
  rating: 1,
});

async function handleSubmit(user: UserCreate, reset: () => void) {
  try {
    await userStore.addUser(user);
    reset();
  }
  catch (error) {
    console.error(error);
  }
}
</script>
