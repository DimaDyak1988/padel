<template>
  <div class="app-layout">
    <!-- Шапка сайта -->
    <header class="app-header">
      <div class="app-header__container">
        <!-- Логотип -->
        <div class="app-header__logo">
          <i class="pi pi-bolt app-header__logo-icon" />
          <span class="app-header__logo-text">Padel Club</span>
        </div>

        <!-- Действия/Профиль -->
        <div class="app-header__actions">
          <Button
            icon="pi pi-bell"
            severity="secondary"
            text
            rounded
          />
          <Button
            icon="pi pi-cog"
            severity="secondary"
            text
            rounded
          />
          <Avatar
            image="https://primefaces.org"
            shape="circle"
            size="large"
            class="app-header__avatar"
          />
        </div>
      </div>
    </header>

    <!-- Основной контент страницы -->
    <main class="app-layout__main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
</script>

<style scoped>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-col: column; /* Исправлено для стандартов Flexbox */
    flex-direction: column;
    background-color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .app-header {
    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 50;
    padding: 16px 24px;
  }

  .app-header__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .app-header__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
    color: #1e293b;
  }

  .app-header__logo-icon {
    color: #4f46e5;
    font-size: 20px;
  }

  .app-header__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .app-header__avatar {
    border: 1px solid #e2e8f0;
  }

  .app-layout__main {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .app-layout__main {
      padding: 32px;
    }
  }
</style>




<!--<template>-->
<!--  <div class="not-found">-->
<!--    <h1>404</h1>-->
<!--    <h2>Страница не найдена</h2>-->
<!--    <p>К сожалению, запрашиваемый адрес не существует.</p>-->

<!--    <RouterLink :to="{ name: 'users' }">-->
<!--      <Button label="Вернуться на главную" severity="info" />-->
<!--    </RouterLink>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import Button from 'primevue/button';-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.not-found {-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--  justify-content: center;-->
<!--  min-height: 60vh;-->
<!--  text-align: center;-->

<!--  h1 {-->
<!--    font-size: 72px;-->
<!--    margin: 0;-->
<!--    color: var(&#45;&#45;p-primary-color); /* Используем переменную PrimeVue */-->
<!--  }-->

<!--  h2 {-->
<!--    font-size: 24px;-->
<!--    margin: 8px 0 16px;-->
<!--  }-->

<!--  p {-->
<!--    color: var(&#45;&#45;p-text-muted-color);-->
<!--    margin-bottom: 24px;-->
<!--  }-->
<!--}-->
<!--</style>-->
