<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <UserCard name="Дмитрий Дьяков" :avatar="DefaultAvatar"/>
    <UserCard name="Анонимна Анонимнова" :avatar="GirlAvatar" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue';
import UserCard from '@/entities/user/ui/UserCard.vue';

import DefaultAvatar from '@/assets/images/avatar_default.png';
import GirlAvatar from '@/assets/images/avatar_girl.jpg';

defineOptions({ name: 'UserPage' });
</script>