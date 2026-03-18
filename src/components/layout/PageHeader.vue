<template>
  <div class="page-header">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.page-header {
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}
</style>