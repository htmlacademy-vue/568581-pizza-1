<template>
  <AppDrop>
    <AppDrag
      :transfer-data="{
        id: this.ingredient.id,
        count: this.count,
        countPrice: this.countPrice,
        ingredient: this.ingredient,
      }"
    >
      <li>
        <span class="filling" :class="ingredientVal">
          {{ this.ingredient.name }}</span
        >
        <RadioButton
          :count="this.ingredient.count"
          @update:value="changeCount"
        />
      </li>
    </AppDrag>
  </AppDrop>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import AppDrop from "@/common/components/AppDrop";
import RadioButton from "@/common/components/RadioButton.vue";
export default {
  name: "ItemIngredient",
  components: {
    RadioButton,
    AppDrag,
    AppDrop,
  },
  data() {
    return {
      Ingredient: this.ingredient,
    };
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
    // price: {
    //   type: Number,
    //   default: 1,
    // },
    // ingredients: {
    //   type: Array,
    // },
    //   count: {
    //     type: Number,
    //     default: 0,
    //   },
  },
  computed: {
    ingredientVal: function () {
      if (!this.ingredient) return "";
      return (
        "filling--" + this.ingredient.image.split("/").slice(-1)[0].slice(0, -4)
      );
    },
  },
  methods: {
    test() {
      console.log(1);
    },

    changeCount(newValue) {
      this.Ingredient.count = newValue;
      this.Ingredient.countPrice = this.count * this.ingredient.price;
      // let obj = {
      //   id: this.ingredient.id,
      //   count: this.count,
      //   countPrice: this.countPrice,
      //   ingredient: this.ingredient,
      // };
      //  obj.count > 0
      this.$emit("updateIngredients", this.Ingredient);
    },
  },
};
</script>
