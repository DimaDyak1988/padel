<template>
  <div class="user-card">
    <!-- Верх: аватар + имя + роль -->
    <div class="user-card__top">
      <Avatar
        :src="avatarUrl"
        :alt="name"
      />
      <div class="user-card__info">
        <div class="user-card__name">{{ name }}</div>
        <!-- <div class="user-card__role">{{ roleLabel }}</div> -->
        <RoleLabel :role="user.role" />
      </div>
    </div>

    <!-- Контакт -->
    <div class="user-card__row user-card__contact">@{{ contact }}</div>

    <!-- Рейтинг -->
    <Rating :value="rating" />

    <!-- Действия -->
    <ActionButtons
      @edit="$emit('edit', user)"
      @delete="$emit('delete', user)"
    />
  </div>
</template>

<script setup lang="ts">
  import type { User } from '../model/user';
  import type { UserRole } from '../model/userRole';
  import Avatar from '@/components/ui/Avatar.vue';
  import Rating from '@/components/ui/Rating.vue';
  import ActionButtons from '@/components/ui/ActionButtons.vue';
  import RoleLabel from '@/components/ui/RoleLabel.vue';
  import defaultAvatar from '@/assets/images/avatar_default.png';

  defineOptions({ name: 'UserCard' });

  const props = defineProps<{
    user: User;
  }>();

  defineEmits<{
    (e: 'edit', user: User): void;
    (e: 'delete', user: User): void;
  }>();

  const { user } = props;

  const avatarUrl = user.avatar || defaultAvatar;
  const contact = user.contact || 'не указан';
  const rating = user.rating || 0;

  const roleLabels: Record<UserRole, string> = {
    player: 'Игрок',
    coach: 'Тренер',
    admin: 'Админ',
  };

  const roleLabel = roleLabels[user.role];
  const { name } = user;
</script>

<style scoped lang="scss">
  .user-card {
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .user-card__top {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .user-card__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-card__name {
    font-weight: 600;
    font-size: 16px;
    color: #212529;
  }

  .user-card__role {
    font-size: 14px;
    color: #495057;
  }

  .user-card__row {
    font-size: 14px;
    color: #495057;
  }

  .user-card__contact {
    word-break: break-all;
  }
</style>
