<template>
  <div class="uploader-preview">
    <div class="uploader-preview__remove-container">
      <Button
        type="button"
        severity="danger"
        size="small"
        @click="handleRemove"
      >
        Удалить
      </Button>
    </div>

    <img
      :src="imgPreview"
      alt=""
      :style="{ objectFit: mode }"
      class="uploader-preview__picture-item"
    />
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import Button from 'primevue/button';

const { fileOrUrl, mode = 'cover' } = defineProps<{
  fileOrUrl: File | string;
  mode?: 'cover' | 'contain';
}>();

const emit = defineEmits<{
  (e: 'remove'): void
}>();

const imgPreview = computed(() => {
  if (fileOrUrl instanceof File) return URL.createObjectURL(fileOrUrl);

  return fileOrUrl;
});

function handleRemove() {
  emit('remove');
}
</script>

<style lang="scss">
.uploader-preview {
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  z-index: 2;
  border-radius: 20px;

  &:hover .uploader-preview__remove-container {
    opacity: 1;
  }
}

.uploader-preview__remove-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;
  color: #fff;
  text-align: center;
  align-content: center;

  opacity: 0;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  transition: opacity 0.4s ease;
}

.uploader-preview__picture-item {
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
}
</style>
