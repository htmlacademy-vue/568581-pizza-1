<template>
  <body>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector @update:doughs="setDough" :doughs="doughs" />
          <BuilderSizeSelectorVue :size="size" @update:size="setSize" />
          <BuilderIngredientsSelector
            :pizzaSauces="pizza.sauces"
            :ingredients="ingredients"
            :sauces="sauces"
            @update:price="setPrice"
            @setIngredients="setIngredients"
            @update:sauce="setSauce"
          />
          <BuilderContentPizza
            :name="name"
            :price="price"
            :sauce="sauce"
            :size="size"
            :ingredients="ingredients"
            @setIngredients="setIngredients"
            @update:name="setName"
          />
        </div>
      </form>
    </main>
  </body>
</template>
<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
import Header from "@/layouts/AppLayout.vue";
import BuilderContentPizza from "@/modules/builder/components/BuilderContentPizza.vue";
import BuilderSizeSelectorVue from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
import { getIngredient } from "@/common/helpers";
import { getDough, getSauce } from "../common/helpers";
export default {
  name: "Index",
  components: {
    Header,
    BuilderContentPizza,
    BuilderSizeSelectorVue,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      misc,
      pizza,
      user,
      ingredients: pizza.ingredients.map((ingredient) =>
        getIngredient(ingredient)
      ),
      doughs: pizza.dough.map((dough) => getDough(dough)),
      size: "23 см",
      sauce: "Сливочный",
      sauces: pizza.sauces.map((sauce) => getSauce(sauce)),
      ingredientsPrice: 0,
      price: 0,
      name: "",
    };
  },
  computed: {},
  methods: {
    setDough(doughs) {
      console.log(doughs);
      this.doughs = doughs;
    },
    setSauce(sauce) {
      console.log(sauce);
      this.sauce = sauce;
    },
    setSize(size) {
      console.log(size);
      this.size = size;
    },
    setName(name) {
      console.log(name);
      this.name = name;
    },
    setIngredients(ingredients) {
      this.ingredients = ingredients;
      console.log(this.ingredients);
    },
    setPrice(price) {
      this.price = price;
    },
  },
  watch: {},
};
</script>
<style scoped></style>
