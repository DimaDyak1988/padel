<template>
  <Teleport to="body">
    <Transition name="popover">
      <div
        v-if="state.visible"
        class="popover"
        :style="popoverStyle"
        @click.stop
      >
        <div class="popover__arrow" />

        <p class="popover__message">
          {{ state.message }}
        </p>

        <div class="popover__actions">
          <Button
            outlined
            size="small"
            @click="popover.cancel"
          >
            {{ state.cancelName }}
          </Button>

          <Button
            variant="danger"
            size="small"
            @click="popover.confirm"
          >
            {{ state.acceptName }}
          </Button>
        </div>
      </div>
    </Transition>

    <Transition name="backdrop">
      <div
        v-if="state.visible"
        class="popover__backdrop"
        @click="popover.cancel"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
// TODO добавить возможность настраивать кнопки, вставлять слоты
import { computed, watch } from 'vue';
import { usePopover } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui';

const popover = usePopover();
const { state } = popover;

const popoverStyle = computed(() => {
  if (!state.target || !state.maxWidth) return {};
  const rect = state.target.getBoundingClientRect();

  const GAP = 10;
  const OFFSET = 12;

  let left = rect.left + rect.width / 2 - state.maxWidth / 2;
  let top = rect.top + rect.height + GAP + window.scrollY;

  if (left < OFFSET) left = OFFSET;
  if (left + state.maxWidth > window.innerWidth - OFFSET) {
    left = window.innerWidth - state.maxWidth - OFFSET;
  }

  return {
    left: `${left}px`,
    top: `${top}px`,
    maxWidth: `${state.maxWidth}px`,
  };
});

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && state.visible) {
    popover.cancel();
  }
}

watch(() => state.visible, (visible) => {
  if (visible) {
    document.addEventListener('keydown', handleKeydown);
  }
  else {
    document.removeEventListener('keydown', handleKeydown);
  }
}, { immediate: true });
</script>

<style scoped>
.popover__backdrop {
  position: fixed;
  inset: 0;
  z-index: 150;
}
.popover {
  position: absolute;
  z-index: 200;
  background: #ffffff;
  border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #e5e7eb;
}
.popover__arrow {
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
.popover__message {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #1a1a2e;
  margin: 0 0 16px;
  line-height: 1.4;
}
.popover__actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.popover__btn {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
}
.popover__btn--cancel {
  background: #ffffff;
  color: #1a1a2e;
  border: 1px solid #e5e7eb;
}
.popover__btn--cancel:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}
.popover__btn--delete {
  background: #dc2626;
  color: #ffffff;
}
.popover__btn--delete:hover {
  background: #b91c1c;
}
.popover-enter-active,
.popover-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.popover-enter-from,
.popover-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.popover-enter-to,
.popover-leave-from {
  opacity: 1;
  transform: translateY(0);
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
