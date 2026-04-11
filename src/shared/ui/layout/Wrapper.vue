<template>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
    <div class="item">10</div>
    <div class="item">11</div>
    <div class="item">12</div>
  </div>
</template>

<style lang="scss" scoped>
  /* Контейнер сетки */
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 колонок одинаковой ширины */
    gap: 16px; /* отступ между колонками (gutter) */
    margin: 0 auto;
  }

  /* Элементы сетки */
  .item {
    background-color: #007bff; /* Primary для примера */
    color: #fff;
    padding: 16px;
    text-align: center;
    font-weight: bold;
  }

  /* Адаптивность */
  @media (max-width: 992px) {
    .container {
      grid-template-columns: repeat(8, 1fr); /* меньше колонок на планшете */
    }
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: repeat(4, 1fr); /* мобильные устройства */
    }
  }

  @media (max-width: 480px) {
    .container {
      grid-template-columns: repeat(2, 1fr); /* маленькие экраны */
    }
  }
</style>
