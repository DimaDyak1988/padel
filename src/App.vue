<template>
  <div class="container">
    <RouterView />

    <ConfirmPopup />
  </div>
</template>

<script setup lang="ts">
import ConfirmPopup from 'primevue/confirmpopup';

</script>
<style lang="scss" scoped>
.container {
  max-width: 1280px;
  margin: var(--space-lg) auto;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px 40px;
  box-shadow:
    0 1px 2px rgba(16, 24, 40, 0.04),
    0 4px 8px rgba(16, 24, 40, 0.06),
    0 12px 24px rgba(16, 24, 40, 0.08);
  border: 1px solid rgba(16, 24, 40, 0.06);
}
</style>
