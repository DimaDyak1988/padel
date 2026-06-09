<template>
  <div
    class="avatar"
    :class="[
      `avatar--${size}`,
      { 'avatar--online': isOnline, 'avatar--placeholder': !src }
    ]"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="avatar__img"
    />
    <span v-else class="avatar__initials">{{ initials }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

  interface Props {
    src?: string;
    alt?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    isOnline?: boolean;
  }

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  alt: '',
  size: 'md',
  isOnline: false,
});

const initials = computed(() => {
  if (!props.alt) return '';
  const words = props.alt.split(' ');
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return props.alt.slice(0, 2).toUpperCase();
});
</script>

<style scoped lang="scss">
  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-circle);
    overflow: hidden;
    flex-shrink: 0;
    background: var(--border-default);
    position: relative;

    &--xs { width: 28px; height: 28px; }
    &--sm { width: 36px; height: 36px; }
    &--md { width: 44px; height: 44px; }
    &--lg { width: 80px; height: 80px; }
    &--xl { width: 100px; height: 100px; }
    &--2xl { width: 120px; height: 120px; }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &__initials {
      color: var(--text-inverse);
      font-weight: var(--font-semibold);
      font-size: var(--text-sm);
    }

    &--placeholder {
      background: var(--star-empty);
    }

    &--placeholder.avatar--lg {
      font-size: var(--text-2xl);
    }

    &--placeholder.avatar--xl {
      font-size: var(--text-3xl);
    }

    &--online::after {
      content: '';
      position: absolute;
      bottom: 1px;
      right: 1px;
      width: 12px;
      height: 12px;
      background: var(--accent-green);
      border-radius: var(--radius-circle);
      border: 2px solid var(--bg-card);
    }
  }
</style>
