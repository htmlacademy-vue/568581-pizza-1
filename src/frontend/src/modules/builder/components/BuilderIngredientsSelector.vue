<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="sauce in pizza.sauces"
            :key="sauce.id"
            class="radio ingredients__input"
          >
            <input type="radio" name="sauce" :value="sauce.name" checked />
            <span>{{ sauce.name }}</span>
          </label>
        </div>
        <div class="ingredients__filling">
          <p>Начинка:</p>

          <ul class="ingredients__list">
            <li
              v-for="(ingredient, index) in pizza.ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <span class="filling" :class="ingredientVal[index]">
                {{ ingredient.name }}</span
              >
              <RadioButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton.vue";
import pizza from "@/static/pizza.json";
export default {
  name: "BuilderIngredientsSelector",
  components: {
    RadioButton,
  },
  data() {
    return {
      pizza,
    };
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
};
</script>
