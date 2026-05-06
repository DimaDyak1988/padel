<template>
  <Button @click="handleAddUser">
    + Добавить пользователя
  </Button>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { useUserStore } from '@/entities/user';

defineOptions({ name: 'AddUserButton' });

const { addUser } = useUserStore();

function handleAddUser() {
  addUser({
    contact: 'dmitryfedorov',
    name: `Дмитрий Фёдоров ${Date.now()}`,
    role: 'player',
    rating: 4,
  });
}
</script>
