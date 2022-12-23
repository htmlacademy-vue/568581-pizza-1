<template>
  <div class="pizza_constructor">
    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
        <div class="pizza__wrapper">
          <div class="pizza__filling pizza__filling--ananas"></div>
          <div class="pizza__filling pizza__filling--bacon"></div>
          <div class="pizza__filling pizza__filling--cheddar"></div>
        </div>
      </div>
    </div>
    <div class="content__result">
      <p>Итого: {{ price }} ₽</p>
      <button type="button" class="button" disabled>Готовьте!</button>
    </div>
  </div>
</template>
<script>
import pizza from "@/static/pizza.json";
export default {
  name: "SelectorItem",
  data() {
    return {
      pizza,
    };
  }};
</script>
