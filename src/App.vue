<template>
  <RouterView />

  <Toast />
  <Popover />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast';
import { Popover } from '@/shared/ui/Popover';
</script>
