<template>
  <AppDrop>
    <AppDrag>
      <li>
        <span class="filling" :class="ingredientVal">
          {{ ingredient.name }}</span
        >
        <RadioButton />
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
  props: {
    ingredient: {
      type: Object,
    },
    price: {
      type: Number,
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
};
</script>
