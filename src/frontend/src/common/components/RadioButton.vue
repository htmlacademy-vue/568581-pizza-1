<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      :disabled="isDecrementDisabled"
      class="counter__button counter__button--minus"
      @click="decrement()"
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
      @click="increment()"
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
      number: this.count,
    };
  },
  props: {
    count: {
      type: Number,
    },
  },
  computed: {
    isDecrementDisabled() {
      return this.number === 0;
    },
  },

  methods: {
    increment() {
      this.number++;
      this.$emit("update:value", this.number);
    },
    decrement() {
      this.number--;
      this.$emit("update:value", this.number);
    },
  },
};
</script>
