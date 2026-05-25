<template>
  <Button
    type="button"
    severity="danger"
    label="Удалить"
    size="small"
    :loading="isPending"
    @click="handleRemove"
  />
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';
import { useRemoveUser } from '../model/useRemoveUser';
import { type User } from '@/entities/user';

const props = defineProps<{
  id: User['id']
}>();

const emit = defineEmits<{
  (e: 'remove-success', userId: User['id']): void,
  (e: 'remove-failure', error: unknown): void,
}>();

const confirm = useConfirm();
const { isPending, handleRemoveUser } = useRemoveUser();

function handleRemove() {
  confirm.require({
    message: 'Вы хотите удалить пользователя ?',
    acceptProps: {
      label: 'Удалить',
      severity: 'danger',
    },
    rejectProps: {
      label: 'Отменить',
      severity: 'secondary',
      outlined: true,
    },
    accept: async () => {
      try {
        await handleRemoveUser(props.id);
        emit('remove-success', props.id);
      }
      catch (error) {
        emit('remove-failure', error);
      }
    },
  });
}
</script>
