<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <h3 v-if="isLoading">
      Загрузка пользователей...
      <ProgressBar mode="indeterminate" style="height: 12px" />
    </h3>

    <template v-else>
      <RouterLink :to="{ name: 'create-user' }">
        <Button severity="info">
          Добавить пользователя
        </Button>
      </RouterLink>

      <AppButton
        size="large"
        label="button"
      />
      <AppButton
        variant="secondary"
        label="button"
      />
      <AppButton
        variant="danger"
        outlined
        label="Удалить"
        @click="onDeleteClick($event)"
      />
      <AppButton
        variant="success"
        label="button"
        @click="onDeleteClick($event)"
      />

      <div class="user-page__grid">
        <UserCard
          v-for="user in users ?? []"
          :key="user.id"
          :user="user"
        >
          <template #actions>
            <RouterLink :to="{ name: 'update-user', params: { id: user.id } }">
              <Button
                severity="info"
                size="small"
                label="Редактировать"
              />
            </RouterLink>

            <RemoveUserButton
              :id="user.id"
              @remove-success="handleRemoveSuccess"
              @remove-failure="handleRemoveFailure"
            />
          </template>
        </UserCard>

        <Popover
          v-model="showPopover"
          :anchor="popoverAnchor"
          :user-name="currentUser?.name"
          @confirm="onConfirmDelete"
          @cancel="onCancelDelete"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onBeforeUnmount, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import { useUsersStore, UserCard } from '@/entities/user';
import { RemoveUserButton } from '@/features/remove-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';
import { getErrorMessage } from '@/shared/lib/getErrorMessage';
import AppButton from '@/shared/ui/AppButton.vue';

import Popover from '@/shared/ui/Popover.vue';

const showPopover = ref(false);
const popoverAnchor = ref(null);
const currentUser = ref(null);

const onDeleteClick = (event, user) => {
  const rect = event.currentTarget.getBoundingClientRect();
  popoverAnchor.value = {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  };
  currentUser.value = user;
  showPopover.value = true;
};

const onConfirmDelete = () => {
  if (!currentUser.value) return;
  users.value = users.value.filter(u => u.id !== currentUser.value.id);
  currentUser.value = null;
  // здесь можно вызвать API / showToast
  console.log('Удалён:', currentUser.value?.name);
};

const onCancelDelete = () => {
  currentUser.value = null;
};

const onEdit = (user) => {
  console.log('Редактировать:', user.name);
};




const toast = useToast();
const usersStore = useUsersStore();
const { users, isLoading  } = storeToRefs(usersStore);
const controller = new AbortController();

function handleRemoveSuccess(userId: string) {
  usersStore.removeUser(userId);
  toast.add({
    severity: 'success',
    summary: 'Пользователь удален',
    life: 3000,
  });
}

function handleRemoveFailure(error: unknown) {
  toast.add({
    severity: 'error',
    summary: getErrorMessage(error),
    life: 5000,
  });
}

onMounted(async () => {
  await usersStore.fetchUsers(controller.signal);
});

onBeforeUnmount(() => controller.abort());
</script>

<style lang="scss" scoped>
.user-page__grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
</style>
