<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      :disabled="isDecrementDisabled"
      class="counter__button counter__button--minus"
      v-on:click="decrement()"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      v-model="number"
      type="text"
      name="counter"
      class="counter__input"
      value="0"
    />
    <button
      type="button"
      v-on:click="increment()"
      class="counter__button counter__button--plus"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "RadioButton",
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    isDecrementDisabled() {
      return this.number === 0;
    },
  },

  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
  },
};
</script>
