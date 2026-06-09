<template>
  <span
    class="label"
    :class="[
      `label--${variant}`,
      `label--${size}`,
      {
        'label--rounded': rounded,
        'label--filled': filled,
      }
    ]"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
type LabelVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
type LabelSize = 'sm' | 'md' | 'lg';

interface Props {
  /** Текстовое содержимое (если не используется слот) */
  text?: string;
  /** Цветовая вариация */
  variant?: LabelVariant;
  /** Размер */
  size?: LabelSize;
  /** Закруглённые края (полный радиус) */
  rounded?: boolean;
  /** Заливка фоном (по умолчанию прозрачный) */
  filled?: boolean;
}

withDefaults(defineProps<Props>(), {
  text: '',
  variant: 'default',
  size: 'md',
  rounded: true,
  filled: false,
});
</script>

<style scoped>
.label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: var(--font-semibold);
  line-height: 1;
  background: transparent;
  border: 1px solid;
  transition: all var(--transition-fast);
}

/* ---------- Rounded ---------- */
.label--rounded {
  border-radius: var(--radius-full);
}

/* ---------- Sizes ---------- */
.label--sm {
  padding: var(--space-1) var(--space-2);
  font-size: var(--text-xs);
  gap: var(--space-1);
}

.label--md {
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-sm);
  gap: var(--space-1);
}

.label--lg {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-base);
  gap: var(--space-2);
}

/* ---------- Variants: outlined (по умолчанию) ---------- */
.label--default {
  color: var(--text-secondary);
  border-color: var(--border-default);
}

.label--primary {
  color: var(--primary-default);
  border-color: var(--primary-default);
}

.label--secondary {
  color: var(--secondary-default);
  border-color: var(--secondary-default);
}

.label--success {
  color: var(--status-success);
  border-color: var(--status-success);
}

.label--danger {
  color: var(--status-danger);
  border-color: var(--status-danger);
}

.label--warning {
  color: var(--status-warning);
  border-color: var(--status-warning);
}

.label--info {
  color: var(--text-link);
  border-color: var(--text-link);
}

/* ---------- Variants: filled (заливка фоном) ---------- */
.label--filled.label--default {
  background: var(--bg-input-hover);
  color: var(--text-primary);
  border-color: var(--border-default);
}

.label--filled.label--primary {
  background: var(--primary-default);
  color: var(--text-inverse);
  border-color: var(--primary-default);
}

.label--filled.label--secondary {
  background: var(--secondary-default);
  color: var(--text-inverse);
  border-color: var(--secondary-default);
}

.label--filled.label--success {
  background: var(--status-success);
  color: var(--text-inverse);
  border-color: var(--status-success);
}

.label--filled.label--danger {
  background: var(--status-danger);
  color: var(--text-inverse);
  border-color: var(--status-danger);
}

.label--filled.label--warning {
  background: var(--status-warning);
  color: var(--text-inverse);
  border-color: var(--status-warning);
}

.label--filled.label--info {
  background: var(--text-link);
  color: var(--text-inverse);
  border-color: var(--text-link);
}
</style>
