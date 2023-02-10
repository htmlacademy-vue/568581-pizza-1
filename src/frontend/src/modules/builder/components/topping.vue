<template>
  <div :class="className"></div>
</template>

<script>
export default {
  name: "toppings",
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  computed: {
    // className() {
    //   return (
    //     "pizza__filling pizza__filling--" +
    //     this.image.split("/").slice(-1)[0].slice(0, -4)
    //   );
    // },
  },
};
</script>
