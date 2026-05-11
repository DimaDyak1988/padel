<template>
  <div class="form-row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .form-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    > * {
      flex: 1 0 auto;
    }
  }

  .form-row + .form-row {
    margin-top: 20px;
  }
</style>
