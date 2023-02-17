<template>
  <body>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            @update:doughs="setDough"
            :dough="dough"
            :doughs="doughs"
          />
          <BuilderSizeSelectorVue :size="size" @update:size="setSize" />
          <BuilderIngredientsSelector
            :pizzaSauces="pizza.sauces"
            :ingredients="ingredients"
            :sauces="sauces"
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
      dough: pizza.dough[0],
      doughs: pizza.dough,
      size: "23 см",
      sauce: pizza.sauces[0],
      sauces: pizza.sauces,
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
    setIngredients(ingredient) {
      this.changeIngredient(ingredient);
      console.log(this.ingredients);
    },
    setPrice(price) {
      this.price = price;
    },
    changeIngredient(changeObject) {
      let elem = this.ingredients.find(
        (ingredient) => ingredient.id === changeObject.id
      );
      elem.count = changeObject.count;
      elem.totalPrice = changeObject.totalPrice;
    },
  },
  watch: {},
};
</script>
<style scoped></style>
