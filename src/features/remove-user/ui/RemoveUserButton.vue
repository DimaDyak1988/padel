<template>
  <Button
    variant="danger"
    outlined
    :loading="isPending"
    @click="handleRemove"
  >
    Удалить
  </Button>
</template>

<script lang="ts" setup>
import { useRemoveUser } from '../model/useRemoveUser';
import { type User } from '@/entities/user';
import { Button } from '@/shared/ui';
import { usePopover } from '@/shared/ui/Popover';

const props = defineProps<{
  id: User['id']
}>();

const emit = defineEmits<{
  (e: 'remove-success', userId: User['id']): void,
  (e: 'remove-failure', error: unknown): void,
}>();

const popover = usePopover();
const { isPending, handleRemoveUser } = useRemoveUser();

function handleRemove(event: MouseEvent) {
  popover.open({
    target: event.currentTarget as HTMLElement,
    acceptName: 'Удалить',
    cancelName: 'Отменить',
    message: 'Вы хотите удалить пользователя?',
    onConfirm: async () => {
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

