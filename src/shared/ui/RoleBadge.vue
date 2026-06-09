<template>
  <span
    class="badge"
    :class="`badge--${role}`"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { UserRole } from '@/entities/user';

const props = defineProps<{
  role: UserRole;
}>();

const labelMap: Record<UserRole, string> = {
  player: 'Игрок',
  coach: 'Тренер',
  admin: 'Админ',
};

const label = computed(() => labelMap[props.role]);
</script>

<style scoped lang="scss">
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  letter-spacing: 0.027em;
  line-height: 1;
  white-space: nowrap;
  border: var(--border-width-default) solid;
  background: transparent;
}

.badge--player {
  color: var(--accent-sky);
  border-color: var(--accent-sky);
}

.badge--coach {
  color: var(--status-success);
  border-color: var(--status-success);
}

.badge--admin {
  color: var(--status-danger);
  border-color: var(--status-danger);
}
</style>
