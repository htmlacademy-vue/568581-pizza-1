<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <!-- <label
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
            :checked="size === selectedSize"
            @input="selectSize(size)"
          />
          <span>{{ size.name }}</span>
        </label> -->
        <SelectorItem
          v-for="(size, index) in sizes"
          :key="size.id"
          :item="size"
          name="diameter"
          :image="pizzaImage[index]"
          :selectedItem="selectedSize"
          @update:selectedItem="selectSize"
        />
      </div>
    </div>
  </div>
</template>
<script>
import SelectorItem from "@/common/components/SelectorItem.vue";
export default {
  name: "BuilderSizeSelector",
  components: {
    SelectorItem,
  },
  data() {
    return {};
  },
  props: {
    selectedSize: {
      type: Object,
    },
    sizes: {
      type: Array,
    },
  },
  methods: {
    selectSize(newValue) {
      this.$emit("update:selectedSize", newValue);
    },
  },
  computed: {
    pizzaVal: function () {
      return this.sizes.map(function (size) {
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
      return this.sizes.map(function (size) {
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
  watch: {},
};
</script>
