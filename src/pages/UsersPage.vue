<template>
  <div class="user-page">
    <PageHeader>
      <h2>Пользователи</h2>
    </PageHeader>

    <h3 v-if="isLoading">
      Загрузка пользователей...
    </h3>

    <template v-else>
      <RouterLink :to="{ name: 'create-user' }">
        <Button severity="info">
          Добавить пользователя
        </Button>
      </RouterLink>

      <div class="user-page__grid">
        <UserCard
          v-for="user in users"
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

            <RemoveUserButton :id="user.id" />
          </template>
        </UserCard>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import Button from 'primevue/button';
import { useUserStore } from '@/entities/user';
import { UserCard } from '@/entities/user';
import { RemoveUserButton } from '@/features/remove-user';
import PageHeader from '@/shared/ui/layout/PageHeader.vue';

defineOptions({ name: 'UserPage' });

const store = useUserStore();
const { users, isLoading } = storeToRefs(store);

onMounted(store.fetchUsers);
</script>

<style lang="scss" scoped>
.user-page__grid {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}
</style>
