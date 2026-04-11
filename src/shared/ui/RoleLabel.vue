<template>
  <span :class="roleClass" class="role-label">{{ label }}</span>
</template>

<script setup lang="ts">
import type { UserRole } from '@/entities/user/model/userRole';

defineOptions({ name: 'RoleLabel' });

interface Props {
  role: UserRole;
}

const props = defineProps<Props>();

const roleClasses: Record<UserRole, string> = {
  player: 'role-player',
  coach: 'role-coach',
  admin: 'role-admin',
};

const roleLabels: Record<UserRole, string> = {
  player: 'Игрок',
  coach: 'Тренер',
  admin: 'Админ',
};

const roleClass = roleClasses[props.role];
const label = roleLabels[props.role];
</script>

<style scoped lang="scss">
.role-label {
  font-size: 14px;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  width: fit-content;
  text-align: center;
}

.role-player { background-color: #007bff; }
.role-coach { background-color: #28a745; }
.role-admin { background-color: #6c757d; }
</style>