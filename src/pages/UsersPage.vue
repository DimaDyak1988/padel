<template>
  <AppDefaultLayout>
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
          <Button>Добавить пользователя</Button>
        </RouterLink>

        <div class="user-page__grid">
          <UserCard
            v-for="user in users ?? []"
            :key="user.id"
            :user="user"
          >
            <template #actions>
              <Button outlined :to="{ name: 'update-user', params: { id: user.id } }">
                Редактировать
              </Button>
              <RemoveUserButton
                :id="user.id"
                @remove-success="handleRemoveSuccess"
                @remove-failure="handleRemoveFailure"
              />
            </template>
          </UserCard>
        </div>
      </template>
    </div>
  </AppDefaultLayout>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onBeforeUnmount, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import ProgressBar from 'primevue/progressbar';
import { useUsersStore, UserCard } from '@/entities/user';
import { RemoveUserButton } from '@/features/remove-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';
import { getErrorMessage } from '@/shared/lib/getErrorMessage';
import { Button } from '@/shared/ui';
import { AppDefaultLayout } from '@/layouts';

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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
