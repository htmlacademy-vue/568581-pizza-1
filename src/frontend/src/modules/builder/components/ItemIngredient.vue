<template>
  <AppDrop>
    <AppDrag
      :transfer-data="{
        ingredient: this.ingredient,
      }"
    >
      <li>
        <span class="filling" :class="ingredientVal">
          {{ this.ingredient.name }}</span
        >
        <RadioButton
          :count="this.ingredient.count"
          @update:count="changeCount"
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
  // data() {
  //   return {
  //     Ingredient: this.ingredient,
  //   };
  // },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
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
    changeCount(newValue) {
      this.ingredient.count = newValue;
      this.ingredient.totalPrice =
        this.ingredient.count * this.ingredient.price;
      this.$emit("updateIngredients", this.ingredient);
    },
  },
};
</script>
