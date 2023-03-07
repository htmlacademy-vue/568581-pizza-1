<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы хуицы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        v-model="Name"
        @change="changeName"
      />
    </label>
    <BuilderPizzaView
      :selectedDough="selectedDough"
      :ingredients="ingredients"
      :selectedSauce="selectedSauce"
      @updateIngredients="changeIngredient"
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
  props: {
    selectedSauce: {
      type: Object,
    },
    selectedDough: {
      type: Object,
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
  data() {
    return {
      Name: this.name,
    };
  },
  methods: {
    changeIngredient(changeObject) {
      let elem = this.ingredients.find(
        (ingredient) => ingredient.id === changeObject.id
      );
      elem.count = changeObject.count;
      elem.totalPrice = changeObject.totalPrice;
    },
    changeName() {
      console.log(this.Name);
      this.$emit("update:name", this.Name);
    },
  },
  watch: {},
};
</script>
