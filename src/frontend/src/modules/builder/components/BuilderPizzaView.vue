<template>
  <AppDrop @drop="addTopping">
    <div class="content__constructor">
      <div class="pizza" :class="pizzaClass">
        <div class="pizza__wrapper">
          <Topping
            v-for="topping in toppings"
            :key="topping.id"
            :id="topping.id"
            :name="topping.name"
            :image="topping.image"
            :price="topping.price"
          />
          <Topping />
        </div>
      </div>
    </div>
  </AppDrop>
</template>
<script>
import AppDrop from "@/common/components/AppDrop.vue";
import Topping from "@/modules/builder/components/topping.vue";
export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
    Topping,
  },
  data() {
    return {};
  },
  props: {
    selectedSauce: {
      type: Object,
    },
    // selectedSize: {
    //   type: Object,
    // },
    selectedDough: {
      type: Object,
    },
    ingredients: {
      type: Array,
    },
  },
  computed: {
    toppings() {
      return this.ingredients.filter((ingredient) => ingredient.count > 0);
    },
    pizzaSauce() {
      switch (this.selectedSauce.name) {
        case "Сливочный":
          return "creamy";
        case "Томатный":
          return "tomato";
        default:
          return "tomato";
      }
    },
    // pizzaSize() {
    //   switch (this.selectedSize.name) {
    //     case "23 см":
    //       return "small";
    //     case "32 см":
    //       return "big";
    //     case "45 см":
    //       return "big";
    //     default:
    //       return "big";
    //   }
    // },
    pizzaDough() {
      switch (this.selectedDough.name) {
        case "Тонкое":
          return "small";
        case "Толстое":
          return "big";
        default:
          return "big";
      }
    },
    pizzaClass() {
      return "pizza--foundation--" + this.pizzaDough + "-" + this.pizzaSauce;
    },
  },
  methods: {
    addTopping(data) {
      let ingredient = data.ingredient;
      ingredient.count++;
      ingredient.totalPrice = ingredient.count * ingredient.price;
      console.log(ingredient);
      this.$emit("updateIngredients", ingredient);
    },
  },
};
</script>
