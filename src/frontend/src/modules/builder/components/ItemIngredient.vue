<template>
  <AppDrop @drop="$emit('drop', $event)">
    <AppDrag :transfer-data="ingredient">
      <li>
        <span class="filling" :class="ingredientVal">
          {{ ingredient.name }}</span
        >
        <RadioButton :count="count" @update:value="changeCount" />
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
      count: 0,
    };
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      default: 1,
    },
    countPrice: {
      type: Number,
      default: 0,
    },
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
      console.log(11111);
    },
    changeCount(newValue) {
      this.count = newValue;
      //this.countPrice = this.count * this.price;
      console.log(this.count);
    },
  },
};
</script>
