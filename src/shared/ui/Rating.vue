<template>
  <div class="rating">
    Рейтинг: <span class="rating-number">{{ value }}</span>
    <span
      v-for="i in max"
      :key="i"
      class="star"
    >
      <span v-if="i <= Math.floor(value)">★</span>
      <span v-else>☆</span>
    </span>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    value: number;
  }

const props = defineProps<Props>();
const value = props.value;
const max = 6;
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
    margin-right: var(--space-xs);
    font-weight: 500;
    color: #212529;
  }
}
</style>
