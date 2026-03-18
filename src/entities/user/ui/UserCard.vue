<template>
  <div class="user-card">
    <div class="user-card__top">
      <div 
        class="user-card__avatar"
        :style="{ backgroundImage: `url(${avatar})` }"
      />
      <div class="user-card__info">
        <div class="user-card__name">{{ name }}</div>
        <div class="user-card__role">Игрок</div>
      </div>

      <div class="user-card__row">@telegramm</div>
      <div class="user-card__row">Рейтинг: 4</div>
      <div class="user-card__actions">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import defaultAvatar from '@/assets/images/avatar_default.png';
// import GirlAvatar from '@/assets/images/avatar_girl.jpg';

defineOptions({ name: 'UserCard' });

const props = defineProps<{
  avatar: string;
  name: string;
}>();

</script>

<style lang="scss" scoped>
.user-card {
  max-width: 420px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid var(--color-border);
}

.user-card__avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: no-repeat center / cover;
}
</style>