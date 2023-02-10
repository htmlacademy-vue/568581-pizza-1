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
      @updateIngredients="updateIngredients"
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
  data() {
    return {
      Name: this.name,
      Ingredients: this.ingredients,
    };
  },
  props: {
    sauce: {
      type: String,
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
  methods: {
    updateIngredients(ingredient) {
      this.addIngredient(ingredient);
      this.$emit("setIngredients", this.Ingredients);
    },
    addIngredient(addObject) {
      if (!this.Ingredients.some((item) => item.id === addObject.id)) {
        this.Ingredients.push(addObject);
      } else {
        let obj = this.Ingredients.find((item) => item.id === addObject.id);
        if (obj) {
          obj.count = addObject.count;
          obj.countPrice = addObject.countPrice;
        }
      }
    },
  },
  watch: {
    Name(newValue) {
      this.$emit("update:name", newValue);
    },
  },
};
</script>
