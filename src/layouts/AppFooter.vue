<!-- src/components/layout/AppFooter.vue -->
<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="app-footer__copyright">
        © 2026 Padel Club. Все права защищены.
      </div>
      <div class="app-footer__links">
        <a href="#" class="app-footer__link">Поддержка</a>
        <a href="#" class="app-footer__link">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-default);
  padding-top: var(--space-4);
  padding-bottom: var(--space-4);
}

.app-footer__container {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-6);
  padding-right: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--text-xs);
  color: var(--text-secondary);
}

.app-footer__links {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.app-footer__link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.app-footer__link:hover {
  text-decoration: underline;
}
</style>
