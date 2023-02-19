<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          v-for="(size, index) in sizes"
          :key="size.id"
          class="diameter__input"
          :class="pizzaImage[index]"
        >
          <input
            type="radio"
            name="diameter"
            class="visually-hidden"
            :value="size.name"
            v-model="Size.name"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "BuilderSizeSelector",
  data() {
    return {
      Size: this.size,
    };
  },
  props: {
    size: {
      type: Object,
    },
    sizes: {
      type: Array,
    }
  },
  computed: {
    pizzaVal: function () {
      return this.pizza.sizes.map(function (size) {
        if (!size) return "";
        switch (size.multiplier) {
          case 1:
            return "small";
          case 2:
            return "normal";
          case 3:
            return "big";
          default:
            return "normal";
        }
      });
    },
    pizzaImage: function () {
      return this.pizza.sizes.map(function (size) {
        if (!size) return "";
        switch (size.multiplier) {
          case 1:
            return "diameter__input--small";
          case 2:
            return "diameter__input--normal";
          case 3:
            return "diameter__input--big";
          default:
            return "diameter__input--normal";
        }
      });
    },
  },
  watch: {
    Size(newValue) {
      this.$emit("update:size", newValue);
    },
  },
};
</script>
