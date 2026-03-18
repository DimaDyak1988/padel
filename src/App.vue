<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--space-lg);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background-color: #f8f9fa;
  }
</style>
