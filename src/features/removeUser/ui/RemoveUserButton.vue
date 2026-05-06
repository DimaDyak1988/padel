<template>
  <Button
    severity="danger"
    outlined
    @click="handleRemove"
  >
    Удалить
  </Button>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import { useConfirm } from 'primevue/useconfirm';
import type { User } from '@/entities/user';
import { useUserStore } from '@/entities/user';

defineOptions({ name: 'RemoveUserButton' });

const { id } = defineProps<{id: User['id']}>();
const { removeUser } = useUserStore();
const confirm = useConfirm();

function handleRemove() {
  confirm.require({
    message: 'Вы точно хотите удалить этого пользователя?',
    header: 'Подтверждение',
    acceptLabel: 'Да, удалить',
    rejectLabel: 'Отмена',
    acceptClass: 'p-button-danger',
    rejectClass: 'p-button-secondary p-button-outlined',
    accept: () => {
      removeUser(id);
    },
  });
}
</script>
