<template>
  <div class="file-uploader">
    <div class="file-uploader__container">
      <input
        ref="fileInputRef"
        class="file-uploader__input"
        type="file"
        @change="handleUpload"
      />

      <Button
        severity="contrast"
        size="small"
        @click="fileInputRef?.click()"
      >
        Загрузить аватар
      </Button>
    </div>

    <FileUploaderPreview
      v-if="modelValue"
      :file-or-url="modelValue"
      @remove="handleRemove"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import FileUploaderPreview from '@/shared/ui/FileUploaderPreview.vue';

const modelValue = defineModel<File | string | null>({ default: null });
const fileInputRef = ref<HTMLInputElement | null>(null);

function handleUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  modelValue.value = file ? file : null;
}

function handleRemove() {
  modelValue.value = null;
}
</script>

<style lang="scss" scoped>
.file-uploader__input {
  display: none;
}

.file-uploader .uploader-preview {
  margin-top: 16px;
}
</style>
