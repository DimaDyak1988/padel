<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: var(--space-lg);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background-color: #F8F9FA;
}
</style>