<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Страница не найдена</h2>
    <p>К сожалению, запрашиваемый адрес не существует.</p>

    <RouterLink :to="{ name: 'users' }">
      <Button label="Вернуться на главную" severity="info" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;

  h1 {
    font-size: 72px;
    margin: 0;
    color: var(--p-primary-color); /* Используем переменную PrimeVue */
  }

  h2 {
    font-size: 24px;
    margin: 8px 0 16px;
  }

  p {
    color: var(--p-text-muted-color);
    margin-bottom: 24px;
  }
}
</style>
