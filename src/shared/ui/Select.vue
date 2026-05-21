<template>
  <Select
    v-bind="{ ...props, ...attrs }"
    :options="options"
    option-label="name"
    option-value="id"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </Select>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import Select, { type SelectProps } from 'primevue/select';

type Option = {
  id: string | number;
  name: string;
}

type Props = Partial<SelectProps> & {
  options: Option[];
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Выберите из списка',
});

const attrs = useAttrs();
</script>
