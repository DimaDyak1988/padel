<template>
  <div class="actions">
    <button class="btn btn-edit" @click="$emit('edit')">Редактировать</button>
    <button class="btn btn-delete" @click="$emit('delete')">Удалить</button>
  </div>
</template>

<script setup lang="ts">
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

  .btn {
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }

  .btn-edit {
    background-color: #007bff;
    color: white;
  }

  .btn-delete {
    background-color: #dc3545;
    color: white;
  }
}
</style>