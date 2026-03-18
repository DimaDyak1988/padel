<template>
  <div class="page-header">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';

  const props = defineProps<{
    name: string;
  }>{}
</script>

<style lang="scss" scoped>
.page-header {
}
</style>