<template>
  <div
    class="avatar"
    :class="[
      `avatar--${finalSize}`,
      { 'avatar--placeholder': !hasValidImage }
    ]"
    :style="[customSizeStyle, backgroundStyle]"
  >
    <img
      v-if="hasValidImage"
      :src="src"
      :alt="alt"
      class="avatar__img"
      @error="handleImageError"
    />
    <span
      v-else-if="fullName"
      class="avatar__initials"
    >
      {{ initials }}
    </span>
    <slot
      v-else
      name="placeholder"
    >
      <span class="avatar__placeholder-icon">👤</span>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
interface Props {
  /** URL изображения */
  src?: string;
  /** Альтернативный текст (alt) */
  alt?: string;
  /** Имя пользователя (для инициалов) — устаревает, используйте fullName */
  name?: string;
  /** Полное имя (Фамилия Имя) для инициалов и генерации цвета */
  fullName?: string;
  /** ID пользователя (для детерминированного цвета, приоритетнее fullName) */
  userId?: string | number;
  /** Предопределённый размер аватара */
  size?: AvatarSize;
  /** Кастомный размер в пикселях (если указан, переопределяет size) */
  customSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  alt: '',
  name: undefined,
  fullName: undefined,
  userId: undefined,
  size: 'md',
  customSize: undefined,
});

const emit = defineEmits<{
    (e: 'error', event: Event): void
  }>();

const imageLoadError = ref(false);

const hasValidImage = computed(() => Boolean(props.src && !imageLoadError.value));

const finalSize = computed(() => {
  if (props.customSize) return 'custom';
  return props.size;
});

const customSizeStyle = computed(() => {
  if (!props.customSize) return {};
  return {
    width: `${props.customSize}px`,
    height: `${props.customSize}px`,
  };
});

// --- Детерминированный фон ---
// Массив доступных фоновых цветов (из style.css)
const AVAILABLE_BACKGROUNDS = [
  'var(--bg-info)',
  'var(--bg-warning)',
  'var(--bg-success)',
  'var(--bg-danger)',
  'var(--accent-sky)',
  'var(--primary-default)',
  'var(--secondary-default)',
  'var(--status-success)',
  'var(--status-danger)',
  'var(--status-warning)',
];

// Функция для определения, является ли цвет тёмным (нужен белый текст)
const isDarkColor = (colorVar: string): boolean => {
  const darkVars = [
    'primary-default',
    'secondary-default',
    'status-success',
    'status-danger',
    'status-warning',
  ];
  return darkVars.some(dark => colorVar.includes(dark));
};

const selectedBackground = computed(() => {
  if (hasValidImage.value) return null;
  const hashKey = props.userId ?? props.fullName ?? props.name ?? '';
  if (!hashKey) return null;

  // Простой хеш
  let hash = 0;
  const str = String(hashKey);
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % AVAILABLE_BACKGROUNDS.length;
  return AVAILABLE_BACKGROUNDS[index];
});

const backgroundStyle = computed(() => {
  const bg = selectedBackground.value;
  if (!bg) return {};
  const dark = isDarkColor(bg);
  return {
    backgroundColor: bg,
    color: dark ? 'var(--text-inverse)' : 'var(--text-primary)',
  };
});

const initials = computed(() => {
  if (!props.fullName) return undefined;
  const pair = props.fullName.trim().split(/\s+/);
  if (pair.length >= 2) {
    return (pair[0][0] + pair[1][0]).toUpperCase();
  }
  return props.fullName.slice(0, 2).toUpperCase();
});

function handleImageError(event: Event) {
  imageLoadError.value = true;
  emit('error', event);
}
</script>

<style scoped lang="scss">
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-circle);
  overflow: hidden;
  flex-shrink: 0;
  background: var(--border-default);
  position: relative;
  transition: background-color var(--transition-fast);

  // Предопределённые размеры
  &--sm { width: 30px; height: 30px; }
  &--md { width: 44px; height: 44px; }
  &--lg { width: 100px; height: 100px; }
  &--xl { width: 120px; height: 120px; }

  // Изображение
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  // Инициалы (когда есть имя, но нет картинки)
  &__initials {
    font-weight: var(--font-semibold);
    font-size: var(--text-sm);
    // цвет текста наследуется из inline-стиля backgroundStyle
  }

  // Иконка-заглушка (когда нет ни картинки, ни имени)
  &__placeholder-icon {
    font-size: var(--icon-2xl);
    // цвет текста наследуется из inline-стиля backgroundStyle
  }

  // Стили для состояния плейсхолдера (нет валидного изображения)
  &--placeholder {
    // фон задаётся через inline-стили, здесь резервный
    background: var(--bg-input-hover);
  }

  // Адаптивный размер шрифта для крупных аватаров
  &--lg &__initials,
  &--lg &__placeholder-icon {
    font-size: var(--text-3xl);
  }

  &--xl &__initials,
  &--xl &__placeholder-icon {
    font-size: var(--text-4xl);
  }
}
</style>
