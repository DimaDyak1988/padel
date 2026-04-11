<template>
  <div class="user-card">
    <div class="user-card__top">
      <Avatar
        :image="avatarUrl"
        :alt="name"
        shape="circle"
        size="xlarge"

        class="user-card__avatar"
      />

      <div class="user-card__info">
        <div class="user-card__name">{{ name }}</div>

        <div class="tags">
          <Tag :value="roleLabel" severity="contrast"/>
        </div>
      </div>
    </div>

    <div class="user-card__contact">@{{ contact }}</div>

    <Rating
      class="user-card__rating"
      :value="rating"
    />

    <div class="user-card__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Tag } from 'primevue';
  import Avatar from 'primevue/avatar';
  import type { User } from '../model/user';
  import type { UserRole } from '../model/userRole';
  import Rating from '@/shared/ui/Rating.vue';
  import defaultAvatar from '@/assets/images/avatar_default.png';

  const props = defineProps<{
    user: User;
  }>();

  const { user } = props;

  const avatarUrl = user.avatar || defaultAvatar;
  const contact = user.contact || 'не указан';
  const rating = user.rating || 0;
  const { name } = user;

  const roleLabels: Record<UserRole, string> = {
    player: 'Игрок',
    coach: 'Тренер',
    admin: 'Админ',
  };

  const roleLabel = roleLabels[user.role];

</script>

<style scoped lang="scss">
  .user-card {
    padding: var(--space-md);
    border-radius: var(--radius-md);
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm-high);
  }

  .user-card__top {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  .user-card__info {
    display: flex;
    gap: var(--space-xs);
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .user-card__avatar {
    border: 1px solid #ccc;

    > :deep(img) {
      object-fit: cover;
    }
  }

  .user-card__name {
    font-weight: 600;
    font-size: var(--fs-base);
    color: #212529;
  }

  .user-card__role {
    font-size: var(--fs-sm);
    color: #495057;
  }

  //.user-card__row {
  //  font-size: var(--fs-sm);
  //  color: #495057;
  //}

  .user-card__contact {
    word-break: break-all;
  }
</style>
