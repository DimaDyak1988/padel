<template>
  <Teleport to="body">
    <Transition name="popover">
      <div
        v-if="modelValue"
        class="delete-popover"
        :style="popoverStyle"
        @click.stop
      >
        <div class="delete-popover__arrow" />
        <p class="delete-popover__message">
          Вы хотите удалить пользователя?
        </p>
        <div class="delete-popover__actions">
          <button
            type="button"
            class="delete-popover__btn delete-popover__btn--cancel"
            @click="onCancel"
          >
            Отменить
          </button>
          <button
            type="button"
            class="delete-popover__btn delete-popover__btn--delete"
            @click="onConfirm"
          >
            Удалить
          </button>
        </div>
      </div>
    </Transition>

    <Transition name="backdrop">
      <div
        v-if="modelValue"
        class="delete-popover__backdrop"
        @click="onCancel"
      />
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  /** v-model: показан ли popover */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /** Координаты якоря (кнопки), относительно которой позиционируется popover */
  anchor: {
    type: Object,
    default: null,
    // { top: number, left: number, width: number, height: number }
  },
  /** Имя пользователя (опционально, для кастомизации текста) */
  userName: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const popoverStyle = computed(() => {
  if (!props.anchor) return {};

  const POPOVER_WIDTH = 300;
  const GAP = 10;
  const OFFSET = 12; // отступ от края экрана

  let left = props.anchor.left + props.anchor.width / 2 - POPOVER_WIDTH / 2;
  let top = props.anchor.top + props.anchor.height + GAP + window.scrollY;

  // clamp по краям экрана
  if (left < OFFSET) left = OFFSET;
  if (left + POPOVER_WIDTH > window.innerWidth - OFFSET) {
    left = window.innerWidth - POPOVER_WIDTH - OFFSET;
  }

  return {
    left: `${left}px`,
    top: `${top}px`,
    width: `${POPOVER_WIDTH}px`,
  };
});

const onCancel = () => {
  emit('update:modelValue', false);
  emit('cancel');
};

const onConfirm = () => {
  emit('update:modelValue', false);
  emit('confirm');
};

// Закрытие по Escape
const onKeydown = (e) => {
  if (e.key === 'Escape' && props.modelValue) {
    onCancel();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped>
  /* ===== Backdrop ===== */
  .delete-popover__backdrop {
    position: fixed;
    inset: 0;
    z-index: 150;
  }

  /* ===== Popover ===== */
  .delete-popover {
    position: absolute;
    z-index: 200;
    background: #ffffff;
    border-radius: 12px;
    padding: 18px 20px;
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.12),
      0 4px 12px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
  }

  /* Стрелочка сверху */
  .delete-popover__arrow {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 13px;
    height: 13px;
    background: #ffffff;
    border-left: 1px solid #e5e7eb;
    border-top: 1px solid #e5e7eb;
  }

  .delete-popover__message {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 16px;
    line-height: 1.4;
    letter-spacing: -0.2px;
  }

  .delete-popover__actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .delete-popover__btn {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.15s ease;
    line-height: 1;
  }

  .delete-popover__btn--cancel {
    background: #ffffff;
    color: #1a1a2e;
    border: 1px solid #e5e7eb;
  }

  .delete-popover__btn--cancel:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }

  .delete-popover__btn--delete {
    background: #dc2626;
    color: #ffffff;
  }

  .delete-popover__btn--delete:hover {
    background: #b91c1c;
  }

  /* ===== Animations ===== */
  .popover-enter-active,
  .popover-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .popover-enter-from,
  .popover-leave-to {
    opacity: 0;
    transform: translateY(6px) scale(0.97);
  }

  .popover-enter-to,
  .popover-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .backdrop-enter-active,
  .backdrop-leave-active {
    transition: opacity 0.2s ease;
  }

  .backdrop-enter-from,
  .backdrop-leave-to {
    opacity: 0;
  }

  .backdrop-enter-to,
  .backdrop-leave-from {
    opacity: 1;
  }
</style>
