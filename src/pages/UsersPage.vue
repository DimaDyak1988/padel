<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <BaseButton variant="danger"> Добавить пользователя + </BaseButton>
    <BaseButton variant="secondary"> Добавить пользователя + </BaseButton>
    <BaseButton> Добавить пользователя + </BaseButton>

    <div class="user-page__grid">
      <UserCard
        v-for="(user, index) in fakeUsers"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { User } from '@/entities/user/model/user';
  import BaseButton from '@/components/buttons/BaseButton.vue';
  import PageHeader from '@/components/layout/PageHeader.vue';
  import UserCard from '@/entities/user/ui/UserCard.vue';
  import DefaultAvatar from '@/assets/images/avatar_default.png';
  import GirlAvatar from '@/assets/images/avatar_girl.jpg';

  defineOptions({ name: 'UserPage' });

  const fakeUsers: User[] = [
    { id: '1', contact: 'alexsmith', name: 'Алексей Смирнов', role: 'player', rating: 4 },
    { id: '2', contact: 'mariapetrov', name: 'Мария Петрова', role: 'coach', rating: 5 },
    { id: '3', contact: 'ivanivanov', name: 'Иван Иванов', role: 'player', rating: 3 },
    { id: '4', contact: 'natashakuznetsova', name: 'Наташа Кузнецова', role: 'admin', rating: 5 },
    {
      id: '5',
      contact: 'redricshugart',
      name: 'Юлия Иванова',
      role: 'player',
      rating: 5,
      avatar: GirlAvatar,
    },
    {
      id: '6',
      contact: 'dmitryfedorov',
      name: 'Дмитрий Фёдоров',
      role: 'coach',
      rating: 4,
    },
    {
      id: '7',
      contact: 'ekaterinasidorova',
      name: 'Екатерина Сидорова',
      role: 'player',
      rating: 3,
      avatar: GirlAvatar,
    },
  ];
</script>

<style lang="scss" scoped>
  .user-page__grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  }
</style>
