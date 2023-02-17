<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="Name"
      />
    </label>
    <BuilderPizzaView
      :size="size"
      :ingredients="ingredients"
      :sauce="sauce"
      @updateIngredients="changeIngredient"
    ></BuilderPizzaView>
    <BuilderPriceCounter :price="price"></BuilderPriceCounter>
  </div>
</template>

<script>
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView.vue";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";

export default {
  components: {
    BuilderPizzaView,
    BuilderPriceCounter,
  },
  props: {
    sauce: {
      type: Object,
    },
    size: {
      type: String,
    },
    price: {
      type: Number,
    },
    name: {
      type: String,
    },
    ingredients: {
      type: Array,
    },
  },
  data() {
    return {
      Name: this.name,
    };
  },
  methods: {
    changeIngredient(changeObject) {
      let elem = this.ingredients.find(
        (ingredient) => ingredient.id === changeObject.id
      );
      elem.count = changeObject.count;
      elem.totalPrice = changeObject.totalPrice;
    },
  },
  watch: {
    Name(newValue) {
      this.$emit("update:name", newValue);
    },
  },
};
</script>
