<!-- src/shared/ui/button/AppButton.vue -->
<template>
  <button
    :type="type"
    :class="[
      'btn',
      `btn--variant-${variant}`,
      `btn--size-${size}`,
      {
        'btn--loading': loading,
        'btn--square': isSquare,
        'btn--outlined': outlined,
        'btn--levitate': levitate && !disabled && !loading,
        'btn--rounded': rounded
      }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- Иконка загрузки (лоадер) -->
    <svg v-if="loading" class="btn__icon btn__icon--spin" viewBox="0 0 24 24">
      <line
        x1="12"
        y1="2"
        x2="12"
        y2="6"
      />
      <line
        x1="12"
        y1="18"
        x2="12"
        y2="22"
      />
      <line
        x1="4.93"
        y1="4.93"
        x2="7.76"
        y2="7.76"
      />
      <line
        x1="16.24"
        y1="16.24"
        x2="19.07"
        y2="19.07"
      />
      <line
        x1="2"
        y1="12"
        x2="6"
        y2="12"
      />
      <line
        x1="18"
        y1="12"
        x2="22"
        y2="12"
      />
      <line
        x1="4.93"
        y1="19.07"
        x2="7.76"
        y2="16.24"
      />
      <line
        x1="16.24"
        y1="7.76"
        x2="19.07"
        y2="4.93"
      />
    </svg>

    <!-- Слот для кастомной SVG иконки из шаблона страницы -->
    <span v-else-if="$slots.icon" class="btn__icon-wrapper">
      <slot name="icon" />
    </span>

    <!-- Текст кнопки -->
    <span v-if="$slots.default || label" class="btn__text">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
  type ButtonSize = 'small' | 'medium' | 'large';

  interface Props {
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    isSquare?: boolean;     // Для квадратных кнопок под иконки
    outlined?: boolean;     // Флаг контурного стиля
    levitate?: boolean;     // Включение эффекта смещения вверх при наведении
    rounded?: boolean;      // Включение полностью круглых краёв (pill/oval button)
  }

withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  isSquare: false,
  outlined: false,
  levitate: false,
  rounded: false,         // По умолчанию кнопки прямоугольные со стандартным скруглением
});

defineEmits<{
    (e: 'click', event: MouseEvent): void;
  }>();
</script>

<style lang="scss" scoped>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    border: 1px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    user-select: none;
    width: auto;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;

    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;

    :deep(svg), &__icon {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex-shrink: 0;
    }

    // Стандартные размеры (прямоугольные скругления из вашего HTML)
    &--size-small {
      padding: 7px 14px;
      font-size: 13px;
      border-radius: 8px; // --radius-sm
    }
    &--size-medium {
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 8px; // --radius-sm
    }
    &--size-large {
      padding: 12px 24px;
      font-size: 15px;
      border-radius: 12px; // --radius-md

      :deep(svg), &__icon {
        width: 18px;
        height: 18px;
      }
    }

    // Квадратный режим (для обычных круглых/квадратных иконок)
    &--square {
      padding: 0;
      aspect-ratio: 1 / 1;
      &.btn--size-small { width: 32px; }
      &.btn--size-medium { width: 40px; }
      &.btn--size-large { width: 48px; }
    }

    // ==========================================
    // МОДИФИКАТОР ROUNDED (Полное скругление)
    // ==========================================
    &--rounded {
      border-radius: 9999px !important; // Перебивает радиусы размеров для создания pill-эффекта
    }

    // ==========================================
    // МОДИФИКАТОР ЛЕВИТАЦИИ
    // ==========================================
    &--levitate {
      @media (hover: hover) {
        &:hover {
          transform: translateY(-1px);

          &.btn--variant-primary { box-shadow: 0 4px 12px rgba(26, 26, 46, 0.25); }
          &.btn--variant-danger { box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2); }
          &.btn--variant-success { box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2); }
          &.btn--variant-secondary { box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); }
        }
      }
    }

    &--levitate:active {
      transform: translateY(0);
    }

    // ==========================================
    // ЦВЕТОВЫЕ СХЕМЫ
    // ==========================================

    &--variant-primary {
      background: #1a1a2e;
      border-color: #1a1a2e;
      color: #fff;

      @media (hover: hover) {
        &:hover:not(:disabled) { background: #2d2d44; border-color: #2d2d44; }
      }
      &:active:not(:disabled) { background: #111122; border-color: #111122; }

      &.btn--outlined {
        background: #ffffff;
        color: #1a1a2e;
        border-color: #e5e7eb;

        @media (hover: hover) {
          &:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; }
        }
        &:active:not(:disabled) { background: #f3f4f6; }
      }
    }

    &--variant-secondary {
      background: #f3f4f6;
      border-color: #e5e7eb;
      color: #1a1a2e;

      @media (hover: hover) {
        &:hover:not(:disabled) { background: #e5e7eb; border-color: #d1d5db; }
      }
      &:active:not(:disabled) { background: #d1d5db; }

      &.btn--outlined {
        background: #ffffff;
        color: #1a1a2e;
        border-color: #e5e7eb;

        @media (hover: hover) {
          &:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; }
        }
        &:active:not(:disabled) { background: #f3f4f6; }
      }
    }

    &--variant-danger {
      background: #ef4444;
      border-color: #ef4444;
      color: #fff;

      @media (hover: hover) {
        &:hover:not(:disabled) { background: #dc2626; border-color: #dc2626; }
      }
      &:active:not(:disabled) { background: #b91c1c; border-color: #b91c1c; }

      &.btn--outlined {
        background: #ffffff;
        color: #ef4444;
        border-color: #fecaca;

        @media (hover: hover) {
          &:hover:not(:disabled) { background: #fef2f2; border-color: #ef4444; }
        }
        &:active:not(:disabled) { background: #fee2e2; }
      }
    }

    &--variant-success {
      background: #22c55e;
      border-color: #22c55e;
      color: #fff;

      @media (hover: hover) {
        &:hover:not(:disabled) { background: #16a34a; border-color: #16a34a; }
      }
      &:active:not(:disabled) { background: #15803d; border-color: #15803d; }

      &.btn--outlined {
        background: #ffffff;
        color: #22c55e;
        border-color: #bbf7d0;

        @media (hover: hover) {
          &:hover:not(:disabled) { background: #f0fdf4; border-color: #22c55e; }
        }
        &:active:not(:disabled) { background: #dcfce7; }
      }
    }

    // Состояния блокировки
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    &--loading {
      cursor: wait;
    }

    &__icon--spin {
      animation: btn-spin 1s linear infinite;
    }

    @keyframes btn-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    // Мобильная адаптивность
    @media (max-width: 640px) {
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px;
      font-size: 15px;

      &--square {
        width: auto;
      }
    }
  }
</style>
