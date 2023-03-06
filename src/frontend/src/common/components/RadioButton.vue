<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      :disabled="count === 0"
      class="counter__button counter__button--minus"
      @click="changeCount(count - 1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      @change="changeCount($event.target.value)"
      :value="count"
      type="text"
      name="counter"
      class="counter__input"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="changeCount(count + 1)"
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

  methods: {
    // increment() {
    //   this.$emit("update:count", this.count + 1);
    // },
    changeCount(newValue) {
      let value = Number(newValue);
      value = Math.max(0, newValue);
      this.$emit("update:count", value);
    },
  },
  watch: {
    // count(newValue) {
    //   this.$emit("update:count", Number(newValue));
    // },
  },
};
</script>
