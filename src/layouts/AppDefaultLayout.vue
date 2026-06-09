<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
</script>

<template>
  <div class="page-layout">
    <header class="page-layout__header">
      <AppHeader />
    </header>

    <main class="page-layout__main">
      <div class="page-layout__container">
        <slot />
      </div>
    </main>

    <footer class="page-layout__footer">
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-page);
  font-family: var(--font-primary);
}

.page-layout__header {
  position: sticky;
  top: 0;
  z-index: 50;
}

.page-layout__main {
  flex: 1 1 auto;
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}

.page-layout__container {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
  animation: fadeIn var(--transition-slow);
}

.page-layout__footer {
  margin-top: auto;
}
</style>
