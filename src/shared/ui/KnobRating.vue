<template>
  <div class="knob-rating">
    <Knob
      v-model="modelValue"
      :size="85"
      :readonly="false"
      :min="min"
      :max="max"
      :step="step"
      value-color="#000"
      :value-template="(value) => value.toFixed(1)"
    />

    <div class="knob-rating__controls">
      <Button
        icon="pi pi-plus"
        size="small"
        severity="contrast"
        :disabled="modelValue >= max"
        @click="handleIncrease"
      />
      <Button
        icon="pi pi-minus"
        size="small"
        :disabled="modelValue <= min"
        severity="contrast"
        @click="handleDecrease"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import Knob from 'primevue/knob';
import Button from 'primevue/button';

const {
  min = 1,
  max = 6,
  step = 0.1,
} = defineProps<{
  min?: number;
  max?: number;
  step?: number;
}>();

const modelValue = defineModel<number>({ default: 1 });

watch(modelValue, (newValue) => {
  if (newValue === undefined) return;
  const rounded = wrapValue(newValue);

  if (newValue !== rounded) modelValue.value = rounded;
}, { immediate: true });

function handleIncrease() {
  modelValue.value = wrapValue(modelValue.value + step);
}

function handleDecrease() {
  modelValue.value = wrapValue(modelValue.value - step);
}

function wrapValue(value: number) {
  return Number(value.toFixed(1));
}
</script>

<style lang="scss" scoped>
.knob-rating {
  display: flex;
  gap: 16px;
}

.knob-rating__controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
</style>
