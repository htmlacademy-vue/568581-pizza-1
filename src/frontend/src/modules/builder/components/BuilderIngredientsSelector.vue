<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <label
            v-for="sauce in sauces"
            :key="sauce.id"
            class="radio ingredients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="sauce.name"
              :checked="sauce === selectedSauce"
              @input="changeSauce(sauce)"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>
        <div class="ingredients__filling">
          <p>Начинка:</p>
          <ul class="ingredients__list">
            <ItemIngredient
              v-for="ingredient in Ingredients"
              :key="ingredient.id"
              :ingredient="ingredient"
              @updateIngredients="updateIngredients"
              class="ingredients__item"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemIngredient from "@/modules/builder/components/ItemIngredient.vue";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    ItemIngredient,
  },
  data() {
    return {
      Ingredients: this.ingredients,
    };
  },
  props: {
    sauces: {
      type: Array,
    },
    ingredientsPrice: {
      type: Number,
      default: 0,
    },
    selectedSauce: {
      type: Object,
    },
    ingredients: {
      type: Array,
    },
  },
  computed: {
    ingredientVal: function () {
      return this.pizza.ingredients.map(function (ingredient) {
        if (!ingredient) return "";
        return (
          "filling--" + ingredient.image.split("/").slice(-1)[0].slice(0, -4)
        );
      });
    },
  },
  methods: {
    updateIngredients(ingredient) {
      this.$emit("setIngredients", ingredient);
    },
    // removeIngredients(ingredient) {
    //   this.Ingredients = this.Ingredients.filter((item) => {
    //     return item.id !== ingredient.id;
    //   });
    //   this.$emit("setIngredients", this.Ingredients);
    // },
    // changeIngredient(changeObject) {
    //   let elem = this.Ingredients.find(
    //     (ingredient) => ingredient.id === changeObject.id
    //   );
    //   elem.count = changeObject.count;
    //   elem.totalPrice = changeObject.totalPrice;
    //   // if (!this.Ingredients.some((item) => item.id === addObject.id)) {
    //   //   this.Ingredients.push(addObject);
    //   // } else {
    //   //   let obj = this.Ingredients.find((item) => item.id === addObject.id);
    //   //   if (obj) {
    //   //     obj.count = addObject.count;
    //   //     obj.countPrice = addObject.countPrice;
    //   //   }
    //   // }
    // },
    // countPrice(ingredientPrice){
    //   this.price
    // },
    changeSauce(newValue) {
      this.$emit("update:selectedSauce", newValue);
    },
  },
  watch: {
    // Sauce(newValue) {
    //   console.log("AAAAAAAAAAAAAAaaa");
    //   this.$emit("update:sauce", newValue);
    // },
  },
  // methods: {
  //   test(target) {
  //     console.log(target);
  //   },
  // },
};
</script>
