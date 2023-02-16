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
      v-model="this.count"
      type="text"
      name="counter"
      class="counter__input"
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
      //this.$emit("update:value", this.count++);
    },
    decrement() {
      this.number--;
      //this.$emit("update:value", this.count--);
    },
  },
  watch: {
    number(newValue) {
      this.$emit("update:name", Number(newValue));
    },
  },
};
</script>
