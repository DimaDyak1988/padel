<template>
  <div class="actions">
    <Button
      type="button"
      label="Редактировать"
      severity="info"
      size="small"
    />

    <Button
      type="button"
      label="Удалить"
      variant="outlined"
      severity="danger"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue';

defineOptions({ name: 'ActionButtons' });
defineEmits<{
  (e: 'edit'): void;
  (e: 'delete'): void;
}>();
</script>

<style scoped lang="scss">
  .actions {
    display: flex;
    gap: 10px;
  }
</style>
