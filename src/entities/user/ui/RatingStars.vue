<template>
  <div class="rating">
    <span class="rating__label">РЕЙТИНГ</span>
    <div class="rating__stars">
      <svg
        v-for="star in 6"
        :key="star"
        class="rating__star"
        :class="{ 'rating__star--filled': star <= filledStars }"
        :style="{ opacity: star === halfStar ? 0.4 : 1 }"
        viewBox="0 0 24 24"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    </div>
    <span class="rating__value">{{ rating.toFixed(1) }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  rating: number;
}

const props = defineProps<Props>();

const filledStars = computed(() => Math.floor(props.rating));
const halfStar = computed(() => {
  const decimal = props.rating % 1;
  return decimal >= 0.5 ? filledStars.value + 1 : 0;
});
</script>

<style scoped lang="scss">
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);

    &__label {
      font-size: var(--text-xs);
      font-weight: var(--font-semibold);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-hint);
    }

    &__stars {
      display: flex;
      gap: 2px;
    }

    &__star {
      width: 18px;
      height: 18px;
      fill: var(--star-empty);
      transition: fill var(--transition-fast);

      &--filled {
        fill: var(--star-filled);
      }
    }

    &__value {
      font-size: var(--text-lg);
      font-weight: var(--font-bold);
      color: var(--text-primary);
    }
  }
</style>
