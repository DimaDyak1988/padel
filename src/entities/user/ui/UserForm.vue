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
      </FormRow>

      <FormRow>
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
          required
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
          <KnobRating
            v-if="$form.rating"
            v-model="$form.rating.value"
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField name="avatar">
          <FileUploader
            v-if="$form.avatar"
            v-model="$form.avatar.value"
          />
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
import { ref } from 'vue';
import type { InferOutput, ObjectSchema, ObjectEntries } from 'valibot';
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import { Form } from '@primevue/forms';
import type { FormSubmitEvent } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Select } from '@/shared/ui';
import FormRow from '@/shared/ui/forms/FormRow.vue';
import FormField from '@/shared/ui/forms/FormField.vue';
import { KnobRating } from '@/shared/ui';
import FileUploader from '@/shared/ui/forms/FileUploader.vue';
import { roleOptionsStatic } from '../config/index';
import type { RoleOption } from '../model/types';

type FormRef = InstanceType<typeof Form> & { reset: () => void };

const props = withDefaults(defineProps<{
  schema: TSchema;
  initialForm: InferOutput<TSchema>;
  roleOptions?: RoleOption[];
  submitButtonName?: string;
  isPending?: boolean;
  hasResetButton?: boolean;
}>(), {
  roleOptions: roleOptionsStatic,
  submitButtonName: 'Сохранить пользователя',
  hasResetButton: false,
});

const emit = defineEmits<{
  (e: 'submit', values: InferOutput<TSchema>): void;
  (e: 'validation-error'): void
}>();

const resolver = valibotResolver(props.schema);
const formRef = ref<FormRef | null>(null);

function handleResetForm() {
  formRef?.value?.reset();
}

function handleSubmit(event: FormSubmitEvent) {
  if (!event.valid) {
    emit('validation-error');
    return;
  }

  emit('submit', event.values as InferOutput<TSchema>);
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
