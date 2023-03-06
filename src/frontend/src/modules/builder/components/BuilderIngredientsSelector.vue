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
              v-for="ingredient in ingredients"
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
    return {};
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
    changeSauce(newValue) {
      this.$emit("update:selectedSauce", newValue);
    },
  },
  watch: {},
};
</script>
