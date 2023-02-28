<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      :disabled="count === 0"
      class="counter__button counter__button--minus"
      @click="decrement"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input :value="count" type="text" name="counter" class="counter__input" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="increment"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "RadioButton",
  // data() {
  //   // return {
  //   //   number: this.count,
  //   // };
  // },
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  // computed: {
  //   isDecrementDisabled() {
  //     return this.number === 0;
  //   },
  // },

  methods: {
    increment() {
      this.$emit("update:count", this.count + 1);
    },
    decrement() {
      this.$emit("update:count", this.count - 1);
    },
  },
  // watch: {
  //   count(newValue) {
  //     this.$emit("update:name", Number(newValue));
  //   },
  // },
};
</script>
