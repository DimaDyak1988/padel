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
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import { useRemoveUser } from '@/features/remove-user';
import { type User } from '@/entities/user';

defineOptions({ name: 'RemoveUserButton' });

const props = defineProps<{
  id: User['id']
}>();

const confirm = useConfirm();
const toast = useToast();
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
      await handleRemoveUser(props.id);
      toast.add({
        severity: 'success',
        summary: 'Пользователь удален',
        life: 3000,
      });
    },
  });
}
</script>
