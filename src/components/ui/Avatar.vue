<template>
  <div
    class="avatar"
    role="img"
    :aria-label="alt"
    :style="{ backgroundImage: `url(${src})` }"
  ></div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Avatar' });

interface Props {
  src: string;
  alt: string;
}

const props = defineProps<Props>();
const { src, alt } = props;
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