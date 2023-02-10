<template>
  <AppDrop @drop="addTopping">
    <div class="content__constructor">
      <div class="pizza" :class="this.pizzaClass">
        <div class="pizza__wrapper">
          <!-- <Topping
            v-for="topping in ingredients"
            :key="topping.id"
            :id="topping.ingredient.id"
            :name="topping.ingredient.name"
            :image="topping.ingredient.image"
            :price="topping.ingredient.price"
          /> -->
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
    return {
      toppings: [],
    };
  },
  props: {
    sauce: {
      type: String,
    },
    size: {
      type: String,
    },
    ingredients: {
      type: Array,
    },
  },
  computed: {
    pizzaSauce() {
      switch (this.sauce) {
        case "Сливочный":
          return "creamy";
        case "Томатный":
          return "tomato";
        default:
          return "tomato";
      }
    },
    pizzaSize() {
      switch (this.size) {
        case "23 см":
          return "small";
        case "32 см":
          return "big";
        case "45 см":
          return "big";
        default:
          return "big";
      }
    },
    pizzaClass() {
      return "pizza--foundation--" + this.pizzaSize + "-" + this.pizzaSauce;
    },
  },
  methods: {
    addTopping(data) {
      this.$emit("updateIngredients", data);
      // console.log(data);
      // let top = {
      //   id: data.id,
      //   name: data.name,
      //   image: data.image,
      //   price: data.price,
      // };
      // if (!this.findTopping(top.id)) {
      //   this.toppings.push(top);
      // }
      // console.log(this.findTopping(top.id));
    },
    // findTopping(id) {
    //   let ret = false;
    //   this.toppings.forEach(function (elem) {
    //     if (id == elem.id) ret = true;
    //   });
    //   return ret;
    // },
  },
};
</script>
