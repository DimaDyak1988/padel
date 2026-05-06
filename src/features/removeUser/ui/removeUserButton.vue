<template>
  <Button
    severity="danger"
    @click="handleRemove"
  >
    Удалить
  </Button>
  <ConfirmPopup />
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import ConfirmPopup from 'primevue/confirmpopup';
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

    acceptClass: 'p-button-danger', // Красная кнопка для удаления
    rejectClass: 'p-button-secondary p-button-outlined', // Серая кнопка отмены

    accept: () => {
      removeUser(id);
    },
  });
}
</script>
