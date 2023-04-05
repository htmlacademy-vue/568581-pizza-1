<template>
  <div id="App">
    <router-view :misc="misc" :pizza="pizza" :user="user" />
  </div>
  <!-- <div id="app">
    <div class="main">
      <div class="main__wrapper">
        <div class="main__header">
          <img
            src="@/assets/img/logo.svg"
            width="300"
            height="47"
            alt="V!U!E! Pizza"
          />
        </div>
        <h1>Добро пожаловать!</h1>
        <p>
          Это проект V!U!E! Pizza для обучения на профессиональном
          онлайн‑курсе<br />
          <b>«Vue.js для опытных разработчиков».</b>
        </p>
      </div>
    </div>
  </div> -->
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
