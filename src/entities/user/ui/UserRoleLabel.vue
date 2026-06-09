<template>
  <Label
    :variant="roleVariant"
    :text="label"
    :rounded="true"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Label } from '@/shared/ui';
import type { UserRole } from '@/entities/user';

const props = defineProps<{ role: UserRole }>();

const labelMap: Record<UserRole, string> = {
  player: 'Игрок',
  coach: 'Тренер',
  admin: 'Админ',
};

const roleVariant = computed(() => {
  if (props.role === 'player') return 'info';
  if (props.role === 'coach') return 'success';
  if (props.role === 'admin') return 'danger';
  return 'default';
});

const label = computed(() => labelMap[props.role]);
</script>
