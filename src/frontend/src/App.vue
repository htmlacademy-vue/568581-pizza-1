<template>
  <div id="app">
    <AppLayout :misc="misc" :pizza="pizza" :user="user" >
      <router-view :misc="misc" :pizza="pizza" :user="user" />
    </AppLayout>
  </div>
</template>

<script>
//import Index from "@/views/Index.vue";
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
export default {
  name: "App",
  data() {
    return {
      misc,
      pizza,
      user,
    }
  },
  computed: {
    routeProps() {
      const routes = {
        IndexHome: { misc, pizza, user },
        Order: { misc, pizza, user },
        Cart: { misc, pizza, user },
        Profile: { misc, pizza, user },
        Login: { user }
      };
      return routes[this.$route.name] || {};
    },
  },
  // components: {
  //   Index,
  // },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
