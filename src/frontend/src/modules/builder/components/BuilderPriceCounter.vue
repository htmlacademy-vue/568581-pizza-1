<template>
  <div class="content__result">
    <p>Итого: {{ price }}₽</p>
    <button type="button" class="button" disabled>Готовьте!</button>
  </div>
</template>
<script>
export default {
  name: "BuilderPriceCounter",
  props: {
    price: {
      type: Number,
    },
  },
};
</script>
