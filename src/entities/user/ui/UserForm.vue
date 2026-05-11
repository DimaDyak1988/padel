<template>
  <Form
    v-slot="$form"
    :resolver="resolver"
    :initial-values="initialForm"
    :validate-on-value-update="false"
    :validate-on-blur="false"
    class="user-form"
    @submit="handleSubmit"
  >
    <div class="user-create-form__inner">
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

          <div class="rating-value">
            {{ $form.rating?.value }}
          </div>
        </FormField>
      </FormRow>
    </div>

    <div class="user-create-form__action">
      <Button
        type="submit"
        severity="info"
      >
        {{ submitName }}
      </Button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { valibotResolver } from '@primevue/forms/resolvers/valibot';
import { Form } from '@primevue/forms';
import type { FormSubmitEvent } from '@primevue/forms';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Slider from 'primevue/slider';
import Select from '@/shared/ui/Select.vue';
import FormRow from '@/shared/ui/forms/FormRow.vue';
import FormField from '@/shared/ui/forms/FormField.vue';
import { roleOptions } from '../config/constants';
import { UserCreateSchema } from '../model/types';
import type { UserCreate, UserUpdate } from '../model/types';

defineOptions({ name: 'UserForm' });

type UserCreateUpdate = UserCreate | UserUpdate;

defineProps<{
  initialForm: UserCreateUpdate;
  submitName: string;
}>();

const emit = defineEmits<{
  (e: 'submit', user: UserCreateUpdate, reset: () => void): void
}>();

const resolver = valibotResolver(UserCreateSchema);


function handleSubmit(event: FormSubmitEvent) {
  if (event.valid) {
    emit('submit', event.values as UserCreateUpdate, event.reset);
  }
}
</script>

<style lang="scss" scoped>
  .user-form__slider {
    margin: 8px 0 16px;
  }
</style>
