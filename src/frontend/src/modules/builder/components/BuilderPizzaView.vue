<template>
  <AppDrop @drop="addTopping">
    <div class="content__constructor">
      <div class="pizza pizza--foundation--big-tomato">
        <div class="pizza__wrapper">
          <Topping
            v-for="topping in toppings"
            :key="topping.id"
            :id="topping.id"
            :name="topping.name"
            :image="topping.image"
            :price="topping.price"
          />
        </div>
      </div>
    </div>
  </AppDrop>
</template>
<script>
import AppDrop from "@/common/components/AppDrop.vue";
import Topping from "@/modules/builder/components/topping.vue";
export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
    Topping,
  },
  data() {
    return {
      toppings: [],
    };
  },
  // props: {
  //   toppings: {
  //     type: Object,
  //   },
  // },
  methods: {
    addTopping(data) {
      console.log(data);
      let top = {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
      };
      if (!this.findTopping(top.id)) {
        this.toppings.push(top);
      }
      console.log(this.findTopping(top.id));
    },
    findTopping(id) {
      let ret = false;
      this.toppings.forEach(function (elem) {
        if (id == elem.id) ret = true;
      });
      return ret;
    },
  },
};
</script>
