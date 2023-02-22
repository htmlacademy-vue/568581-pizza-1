<template>
  <AppDrop>
    <AppDrag
      :transfer-data="{
        ingredient: this.Ingredient,
      }"
    >
      <li>
        <span class="filling" :class="ingredientVal">
          {{ this.Ingredient.name }}</span
        >
        <RadioButton
          :count="this.Ingredient.count"
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
  },
  computed: {
    ingredientVal: function () {
      if (!this.ingredient) return "";
      return (
        "filling--" + this.Ingredient.image.split("/").slice(-1)[0].slice(0, -4)
      );
    },
  },
  methods: {
    changeCount(newValue) {
      this.Ingredient.count = newValue;
      this.Ingredient.totalPrice =
        this.Ingredient.count * this.Ingredient.price;
      this.$emit("updateIngredients", this.Ingredient);
    },
  },
};
</script>
