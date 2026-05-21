<template>
  <Form
    ref="formRef"
    v-slot="$form"
    :resolver="resolver"
    :initial-values="initialForm"
    :validate-on-value-update="false"
    :validate-on-blur="false"
    class="user-form"
    @submit="handleSubmit"
  >
    <div class="user-form__inner">
      <FormRow>
        <FormField
          name="name"
          label="Имя"
          required
        >
          <InputText />
        </FormField>

        <FormField
          name="lastName"
          label="Фамилия"
          required
        >
          <InputText />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField
          name="contact"
          label="Контакт"
        >
          <InputText />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField
          name="role"
          label="Роль"
        >
          <Select :options="roleOptions" />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField
          name="rating"
          label="Рейтинг"
        >
          <Slider
            :min="1"
            :max="6"
            :step="0.1"
            class="user-form__slider"
          />

          <div class="user-form__slider-value">
            {{ $form.rating?.value }}
          </div>
        </FormField>
      </FormRow>
    </div>

    <div class="user-form__actions">
      <Button
        type="submit"
        severity="info"
        :loading="isPending"
        :label="submitButtonName"
      />

      <Button
        v-if="hasResetButton"
        type="button"
        severity="secondary"
        variant="text"
        @click="handleResetForm"
      >
        Сбросить форму
      </Button>
    </div>
  </Form>
</template>

<script setup lang="ts" generic="TSchema extends ObjectSchema<ObjectEntries, any>">
import { ref  } from 'vue';
import type { InferOutput, ObjectSchema, ObjectEntries } from 'valibot';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import { Form } from '@primevue/forms';
import type { FormSubmitEvent } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import { useToast } from 'primevue/usetoast';
import Select from '@/shared/ui/Select.vue';
import FormRow from '@/shared/ui/forms/FormRow.vue';
import FormField from '@/shared/ui/forms/FormField.vue';
import { roleOptions } from '../config/constants';

defineOptions({ name: 'UserForm' });

type FormRef = InstanceType<typeof Form> & { reset: () => void };

const props = withDefaults(defineProps<{
  schema: TSchema;
  initialForm: InferOutput<TSchema>;
  submitButtonName?: string;
  isPending?: boolean;
  hasResetButton?: boolean;
}>(), {
  submitButtonName: 'Сохранить пользователя',
  hasResetButton: false,
});

const emit = defineEmits<{
  (e: 'submit', values: InferOutput<TSchema>): void;
}>();

const resolver = valibotResolver(props.schema);
const formRef = ref<FormRef | null>(null);
const toast = useToast();

function handleResetForm() {
  formRef?.value?.reset();
}

function handleSubmit(event: FormSubmitEvent) {
  if (!event.valid) {
    toast.add({
      severity: 'warn',
      summary: 'Проверьте корректность заполнения формы',
      life: 2000,
    });
    return;
  }
  emit('submit', event.values);
}

defineExpose({
  reset: handleResetForm,
});
</script>

<style lang="scss" scoped>
.user-form__slider {
  margin: 8px 0 16px;
  max-width: 300px;

  &-value {
    font-size: var(--fs-sm);
  }
}

.user-form__actions {
  display: flex;
  gap: var(--space-md);
  margin-top: 40px;
}
</style>
