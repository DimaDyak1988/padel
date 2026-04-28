<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <BaseButton variant="danger">
      Добавить пользователя +
    </BaseButton>

    <BaseButton variant="secondary">
      Добавить пользователя +
    </BaseButton>

    <BaseButton> Добавить пользователя + </BaseButton>

    <div class="user-page__grid">
      <UserCard
        v-for="(user) in fakeUsers"
        :key="user.id"
        :user="user"
      />
    </div>

    <input v-model="newName" type="text" />
    <button type="submit" @click="handleSave">
      Save
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '@/entities/user';
import { UserCard } from '@/entities/user';
import mockData from '../model/mockData';
import BaseButton from '@/shared/ui/buttons/BaseButton.vue';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

const newName = ref<string>('');
const fakeUsers = ref<User[]>(mockData);

function handleSave() {
  fakeUsers.value[0].name = newName.value;
  newName.value = '';
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
