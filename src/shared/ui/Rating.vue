<template>
  <div class="rating">
    <span
      v-for="i in max"
      :key="i"
      class="star"
    >
      <span v-if="i <= Math.floor(value)">★</span>
      <span v-else>☆</span>
    </span>
    <span class="rating-number">{{ value }}/{{ max }}</span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    value: number;
    max?: number;
  }

  const props = defineProps<Props>();
  const max = props.max || 5;
  const value = props.value;
</script>

<style scoped lang="scss">
.rating {
  display: flex;
  align-items: center;
  gap: 4px;

  .star {
    color: #ffc107;
    font-size: 16px;
    line-height: 1;
  }

  .rating-number {
    margin-left: 8px;
    font-weight: 500;
    color: #212529;
  }
}
</style>
