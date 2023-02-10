<template>
  <body>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            @update:dough="setDough"
            :dough="dough"
            :pizza="pizza"
          />
          <BuilderSizeSelectorVue :size="size" @update:size="setSize" />
          <BuilderIngredientsSelector
            :pizzaSauces="pizza.sauces"
            :ingredients="ingredients"
            :sauce="sauce"
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
      dough: "Тонкое",
      size: "23 см",
      sauce: "Томатный",
      ingredientsPrice: 0,
      price: 0,
      name: "",
    };
  },
  computed: {},
  methods: {
    setDough(dough) {
      console.log(dough);
      this.dough = dough;
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
