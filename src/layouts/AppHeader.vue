<template>
  <div class="app-header">
    <!-- Новый ограничивающий контейнер на 1440px -->
    <div class="app-header__container">
      <!-- Логотип -->
      <div class="app-header__logo">
        <div class="app-header__logo-icon">
          <svg
            xmlns="http://w3.org"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <span class="app-header__logo-text">Padel Club</span>
      </div>

      <!-- Панель действий -->
      <div class="app-header__actions">
        <!-- Уведомления -->
        <button class="app-header__btn" aria-label="Уведомления">
          <svg
            xmlns="http://w3.org"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>

        <!-- Настройки -->
        <button class="app-header__btn" aria-label="Настройки">
          <svg
            xmlns="http://w3.org"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>

        <!-- Аватар профиля -->
        <div class="app-header__avatar">
          <img
            src="https://img.magnific.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1781357632~exp=1781361232~hmac=cba978006d0de89ed0627f2c2dc110f6c09b7720bf6fe813611432085316cc80&w=2000"
            alt="Администратор"
            class="app-header__avatar-img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .app-header {
    height: var(--header-height);
    background: var(--gradient-header);
    box-shadow: var(--shadow-header);
  }

  /* Новые стили для центрирования содержимого */
  .app-header__container {
    max-width: var(--max-width);
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app-header__logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
  }

  .app-header__logo-icon {
    background-color: var(--primary-default);
    color: var(--text-inverse);
    width: var(--space-8);
    height: var(--space-8);
    border-radius: var(--radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-header__logo-text {
    font-size: var(--text-lg);
    font-weight: var(--font-bold);
    color: var(--text-primary);
    letter-spacing: -0.025em;
  }

  .app-header__actions {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }

  .app-header__btn {
    color: var(--text-secondary);
    padding: var(--space-2);
    border-radius: var(--radius-circle);
    transition: background-color var(--transition-fast);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-header__btn:hover {
    background-color: var(--bg-input-hover);
  }

  .app-header__avatar {
    width: var(--space-8);
    height: var(--space-8);
    border-radius: var(--radius-circle);
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--border-light);
    box-shadow: var(--shadow-xs);
  }

  .app-header__avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
