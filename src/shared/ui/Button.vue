<template>
  <component
    :is="componentType"
    :to="to"
    :type="to ? undefined : type"
    :class="buttonClasses"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-busy="loading"
    @click="handleClick"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true" />

    <span v-if="hasIconLeft" class="btn__icon btn__icon--left">
      <slot name="iconLeft" />
    </span>

    <span v-if="$slots.default" class="btn__label">
      <slot />
    </span>

    <span v-if="hasIconRight" class="btn__icon btn__icon--right">
      <slot name="iconRight" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { type RouteLocationRaw, RouterLink } from 'vue-router';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonType = 'button' | 'submit' | 'reset'

interface ButtonProps {
  to?: RouteLocationRaw;
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  isSquare?: boolean
  outlined?: boolean
  levitate?: boolean
  rounded?: boolean
  fullWidth?: boolean
  type?: ButtonType
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  to: undefined,
  disabled: false,
  loading: false,
  isSquare: false,
  outlined: false,
  levitate: false,
  rounded: false,
  fullWidth: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent]
}>();

const slots = useSlots();

const componentType = computed(() => props.to ? RouterLink : 'button');
const isDisabled = computed(() => props.disabled || props.loading);
const hasIconLeft = computed(() => Boolean(slots.iconLeft));
const hasIconRight = computed(() => Boolean(slots.iconRight));
const buttonClasses = computed(() => [
  'btn',
  `btn--${props.size}`,
  `btn--${props.variant}`,
  {
    'btn--outlined': props.outlined,
    'btn--rounded': props.rounded,
    'btn--square': props.isSquare,
    'btn--levitate': props.levitate,
    'btn--full': props.fullWidth,
    'btn--loading': props.loading,
    'btn--disabled': props.disabled,
  },
]);

const handleClick = (event: MouseEvent): void => {
  emit('click', event);
};
</script>


<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-weight: var(--font-medium);
  line-height: 1;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: all var(--transition-normal);
  position: relative;
  background-color: transparent;
  color: inherit;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

.btn:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.btn:disabled,
.btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.btn:hover, .btn:focus, .btn:active {
  text-decoration: none;
}

/* ---------- Sizes ---------- */
.btn--small {
  height: var(--btn-height-sm);
  padding: 0 var(--space-4);
  font-size: var(--text-sm);
  border-radius: var(--radius-md);
  gap: var(--space-1);
}

.btn--medium {
  height: var(--btn-height-md);
  padding: 0 var(--space-5);
  font-size: var(--text-base);
  border-radius: var(--radius-md);
}

.btn--large {
  height: var(--btn-height-lg);
  padding: 0 var(--space-8);
  font-size: var(--text-lg);
  border-radius: var(--radius-lg);
}

/* ---------- Square ---------- */
.btn--square.btn--small { width: var(--btn-height-sm); padding: 0; }
.btn--square.btn--medium { width: var(--btn-height-md); padding: 0; }
.btn--square.btn--large { width: var(--btn-height-lg); padding: 0; }

/* ---------- Rounded ---------- */
.btn--rounded { border-radius: var(--radius-full); }

/* ---------- Full width ---------- */
.btn--full { width: 100%; }

/* ---------- Levitate (только подъём, без тени) ---------- */
.btn--levitate {
  transition: transform var(--transition-normal);
}

.btn--levitate:hover:not(:disabled):not(.btn--loading) {
  transform: translateY(-2px);
}

.btn--levitate:active:not(:disabled):not(.btn--loading) {
  transform: translateY(0);
}

/* ---------- Variants: Filled ---------- */
.btn--primary {
  background-color: var(--primary-default);
  color: var(--text-inverse);
  border-color: var(--primary-default);
  box-shadow: var(--shadow-button);
}

.btn--primary:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
}

.btn--primary:active:not(:disabled):not(.btn--loading) {
  background-color: var(--primary-active);
  border-color: var(--primary-active);
}

.btn--secondary {
  background-color: var(--bg-card);
  color: var(--text-primary);
  border-color: var(--border-default);
}

.btn--secondary:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--bg-input-hover);
  border-color: var(--secondary-hover);
  color: var(--secondary-hover);
}

.btn--secondary:active:not(:disabled):not(.btn--loading) {
  background-color: var(--border-light);
}

.btn--danger {
  background-color: var(--status-danger);
  color: var(--text-inverse);
  border-color: var(--status-danger);
  box-shadow: var(--shadow-button);
}

.btn--danger:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--status-danger-hover);
  border-color: var(--status-danger-hover);
}

.btn--success {
  background-color: var(--status-success);
  color: var(--text-inverse);
  border-color: var(--status-success);
  box-shadow: var(--shadow-button);
}

.btn--success:hover:not(:disabled):not(.btn--loading) {
  background-color: #15803d;
  border-color: #15803d;
}

/* ---------- Variants: Outlined (лёгкая подсветка, без инверсии) ---------- */
.btn--outlined.btn--primary {
  background-color: transparent;
  color: var(--primary-default);
  border-color: var(--primary-default);
  box-shadow: none;
}

.btn--outlined.btn--primary:hover:not(:disabled):not(.btn--loading) {
  background-color: rgba(26, 26, 26, 0.06);
  border-color: var(--primary-hover);
  color: var(--primary-hover);
}

.btn--outlined.btn--primary:active:not(:disabled):not(.btn--loading) {
  background-color: rgba(26, 26, 26, 0.1);
}

.btn--outlined.btn--secondary {
  background-color: transparent;
  color: var(--text-secondary);
  border-color: var(--border-default);
  box-shadow: none;
}

.btn--outlined.btn--secondary:hover:not(:disabled):not(.btn--loading) {
  background-color: rgba(107, 114, 128, 0.08);
  border-color: var(--secondary-hover);
  color: var(--secondary-hover);
}

.btn--outlined.btn--secondary:active:not(:disabled):not(.btn--loading) {
  background-color: rgba(107, 114, 128, 0.12);
}

.btn--outlined.btn--danger {
  background-color: transparent;
  color: var(--status-danger);
  border-color: var(--status-danger-border);
  box-shadow: none;
}

.btn--outlined.btn--danger:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--status-danger-bg);
  border-color: var(--status-danger);
  color: var(--status-danger);
}

.btn--outlined.btn--danger:active:not(:disabled):not(.btn--loading) {
  background-color: rgba(220, 38, 38, 0.12);
}

.btn--outlined.btn--success {
  background-color: transparent;
  color: var(--status-success);
  border-color: var(--status-success-border);
  box-shadow: none;
}

.btn--outlined.btn--success:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--status-success-bg);
  border-color: var(--status-success);
  color: var(--status-success);
}

.btn--outlined.btn--success:active:not(:disabled):not(.btn--loading) {
  background-color: rgba(22, 163, 74, 0.12);
}

/* ---------- Loading ---------- */
.btn--loading {
  pointer-events: none;
}

.btn--loading .btn__label {
  opacity: 0;
}

.btn__spinner {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: currentColor;
  border-radius: var(--radius-circle);
  animation: btn-spin 0.6s linear infinite;
}

.btn--outlined .btn__spinner,
.btn--secondary .btn__spinner {
  border-color: rgba(0, 0, 0, 0.15);
  border-top-color: currentColor;
}

.btn--small .btn__spinner {
  width: 12px;
  height: 12px;
  border-width: 1.5px;
}

.btn--large .btn__spinner {
  width: 20px;
  height: 20px;
}

@keyframes btn-spin {
  to { transform: rotate(360deg); }
}

/* ---------- Icon slots ---------- */
.btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.btn--small .btn__icon {
  width: var(--icon-sm);
  height: var(--icon-sm);
}

.btn--large .btn__icon {
  width: var(--icon-lg);
  height: var(--icon-lg);
}

.btn__icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.btn__label {
  transition: opacity var(--transition-fast);
}
</style>
