<template>
  <FormField
    v-slot="$field"
    :name="name"
    :initial-value="initialValue"
    class="form-field"
  >
    <label
      v-if="label"
      :for="labelId"
      class="form-field__label"
    >
      {{ label }}

      <span
        v-if="required"
        class="form-field__label--required"
      >*
      </span>
    </label>

    <slot />

    <div
      v-if="$field?.invalid"
      class="form-field__error"
    >
      <Message
        v-for="(error, index) in $field.errors"
        :key="index"
        severity="error"
        size="small"
        variant="simple"
      >
        {{ error.message }}
      </Message>
    </div>
  </FormField>
</template>

<script lang="ts" setup>
import Message from 'primevue/message';
import { FormField } from '@primevue/forms';

withDefaults(defineProps<{
  name: string;
  required?: boolean;
  label?: string;
  labelId?: string;
  initialValue?: string | null;
}>(), {
  required: false,
  label: '',
  labelId: '',
  initialValue: null,
});
</script>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 1 0 100%;
  }
}

.form-field__error {
  margin-top: 4px;
}

.form-field__label {
  margin-bottom: 6px;
  font-size: 14px;
}

.form-field__label--required {
  color: var(--color-danger);
}
</style>
