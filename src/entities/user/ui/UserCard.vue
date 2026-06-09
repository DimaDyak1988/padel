<template>
  <article class="user-card">
    <div class="user-card__avatar">
      <Avatar
        v-if="user.avatar"
        :src="user.avatar"
        :alt="user.name"
        size="xl"
      />
    </div>

    <div class="user-card__name-row">
      <div class="user-card__name">
        {{ fullName }}
      </div>
      <UserRoleLabel :role="user.role" />
    </div>

    <div class="user-card__telegram">
      <i class="pi pi-telegram telegram-color" />
      <span>{{ user.contact }}</span>
    </div>

    <div class="user-card__rating">
      <RatingStars :rating="user.rating" />
    </div>

    <!--    <div class="user-card__contacts">-->
    <!--      <div class="user-card__contact">-->
    <!--        <svg-->
    <!--          viewBox="0 0 24 24"-->
    <!--          width="16"-->
    <!--          height="16"-->
    <!--          fill="none"-->
    <!--          stroke="currentColor"-->
    <!--          stroke-width="1.8"-->
    <!--          stroke-linecap="round"-->
    <!--          stroke-linejoin="round"-->
    <!--        >-->
    <!--          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />-->
    <!--          <polyline points="22,6 12,13 2,6" />-->
    <!--        </svg>-->
    <!--        <span>{{ user.email }}</span>-->
    <!--      </div>-->

    <!--      <div class="user-card__contact">-->
    <!--        <svg-->
    <!--          viewBox="0 0 24 24"-->
    <!--          width="16"-->
    <!--          height="16"-->
    <!--          fill="none"-->
    <!--          stroke="currentColor"-->
    <!--          stroke-width="1.8"-->
    <!--          stroke-linecap="round"-->
    <!--          stroke-linejoin="round"-->
    <!--        >-->
    <!--          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />-->
    <!--        </svg>-->
    <!--        <span>{{ user.phone }}</span>-->
    <!--      </div>-->
    <!--    </div>-->

    <div v-if="$slots['actions']" class="user-card__actions">
      <slot name="actions" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { User } from '@/entities/user';
import Avatar from './Avatar.vue';
import RatingStars from './RatingStars.vue';
import UserRoleLabel from './UserRoleLabel.vue';

const { user } = defineProps<{
  user: User
}>();

const fullName = computed(() => [user.name, user.lastName].join(' '));
</script>

<style scoped lang="scss">
.user-card {
  background: var(--bg-card);
  border-radius: var(--radius-2xl);
  padding: var(--space-8) var(--space-6) var(--space-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: box-shadow var(--transition-normal);
  box-shadow: var(--shadow-card);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-default), #4f46e5);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover {
    box-shadow: var(--shadow-lg);
  }

  &:hover::before {
    opacity: 1;
  }

  &__avatar {
    margin-bottom: var(--space-4);
  }

  .user-card__name-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__name {
    font-size: var(--text-xl);
    font-weight: var(--font-bold);
    letter-spacing: -0.3px;
    text-align: center;
    color: var(--text-primary);
  }

  &__telegram {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    font-size: var(--text-sm);
    color: var(--text-secondary);
    margin-bottom: var(--space-5);
  }

  &__rating {
    background: var(--bg-page);
    border-radius: var(--radius-md);
    padding: var(--space-4) var(--space-5);
    width: 100%;
    margin-bottom: var(--space-5);
  }

  &__contacts {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    margin-bottom: var(--space-5);
    padding-top: var(--space-4);
    border-top: 1px solid var(--border-default);
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  &__actions {
    display: flex;
    gap: var(--space-3);
    width: 100%;

    > * {
      flex: 1;
      width: 100%;
    }
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  flex: 1;
  padding: var(--space-2) var(--space-4);

  &--outline {
    background: var(--bg-card);
    color: var(--text-primary);
    border: 1px solid var(--border-default);

    &:hover {
      background: var(--bg-input-hover);
      border-color: var(--border-default);
    }
  }

  &--danger-outline {
    background: var(--bg-card);
    color: var(--status-danger);
    border: 1px solid var(--status-danger-border);

    &:hover {
      background: var(--status-danger-bg);
      border-color: var(--status-danger);
    }
  }
}
</style>
