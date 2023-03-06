<template>
  <body>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector
            :selectedDough.sync="selectedDough"
            :doughs="doughs"
          />
          <BuilderSizeSelectorVue
            :selectedSize.sync="selectedSize"
            :sizes="sizes"
          />
          <BuilderIngredientsSelector
            :ingredients="ingredients"
            :selectedSauce.sync="selectedSauce"
            :sauces="sauces"
            @setIngredients="setIngredients"
          />
          <BuilderContentPizza
            :name="name"
            :price="price"
            :selectedSauce="selectedSauce"
            :selectedDough="selectedDough"
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
      selectedDough: pizza.dough[0],
      doughs: pizza.dough,
      selectedSauce: pizza.sauces[0],
      sauces: pizza.sauces,
      selectedSize: pizza.sizes[0],
      size: pizza.sizes[0],
      sizes: pizza.sizes,
      name: "",
    };
  },
  computed: {
    price() {
      return (
        this.selectedSize.multiplier *
        (this.ingredientPrice +
          this.selectedDough.price +
          this.selectedSauce.price)
      );
    },
    ingredientPrice() {
      return this.ingredients.reduce((sum, item) => sum + item.totalPrice, 0);
    },
  },
  methods: {
    setName(name) {
      //console.log(name);
      this.name = name;
    },
    setIngredients(ingredient) {
      this.changeIngredient(ingredient);
      //console.log(this.ingredients);
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
  watch: {
    // ingredients: {
    //   handler(val, oldVal){
    //     console.log(val);
    //     console.log(oldVal);
    //   },
    //   deep: true,
    // },
  },
};
</script>
<style scoped></style>
