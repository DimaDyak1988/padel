<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <Button severity="info">
      Добавить пользователя
    </Button>

    <div class="user-page__grid">
      <UserCard
        v-for="(user) in users"
        :key="user.id"
        :user="user"
      />
    </div>

    <input v-model="userId" type="text" />
    <button type="submit" @click="handleRemove">
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import { useUserStore } from '@/entities/user';
import { UserCard } from '@/entities/user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

const userId = ref<string>('');
const store = useUserStore();
const { users } = storeToRefs(store);

function handleRemove() {
  store.removeUser(userId.value);
}

defineOptions({ name: 'UserPage' });
</script>

<style lang="scss" scoped>
.user-page__grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}
</style>
