<script setup lang="ts">
  type Variant = 'primary' | 'secondary' | 'danger';
  type Size = 'sm' | 'md' | 'lg';

  const props = defineProps<{
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
  }>();
</script>

<template>
  <button
    class="btn"
    :class="[
      `btn--${props.variant || 'primary'}`,
      `btn--${props.size || 'md'}`,
      { 'btn--disabled': props.disabled },
    ]"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
  .btn {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    user-select: none;
    outline: none;
  }

  /* Sizes */
  .btn--sm {
    padding: 6px 12px;
    font-size: 12px;
  }
  .btn--md {
    padding: 10px 16px;
    font-size: 14px;
  }
  .btn--lg {
    padding: 14px 20px;
    font-size: 16px;
  }

  /* Variants */
  .btn--primary {
    background: #3b82f6;
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .btn--primary:hover {
    background: #2563eb;
  }

  .btn--secondary {
    background: #e5e7eb;
    color: #111827;
  }

  .btn--danger {
    background: #ef4444;
    color: white;
  }

  /* Disabled */
  .btn--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn:active:not(.btn--disabled) {
    top: 1px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    background-color: #1e40af;
  }
</style>
