<template>
  <div
    class="avatar"
    role="img"
    :aria-label="alt"
    :style="{ backgroundImage: `url(${src})` }"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<style scoped lang="scss">
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
}
</style>
