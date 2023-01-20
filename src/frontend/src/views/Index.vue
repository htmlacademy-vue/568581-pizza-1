<template>
  <body>
    <Header />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector />
          <BuilderSizeSelectorVue />
          <BuilderIngredientsSelector />
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>
            <BuilderPizzaViewVue />
            <BuilderPriceCounter />
          </div>
        </div>
      </form>
    </main>
  </body>
</template>
<script>
import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
import user from "@/static/user.json";
import Header from "@/layouts/AppLayout.vue";
import BuilderPizzaViewVue from "@/modules/builder/components/BuilderPizzaView.vue";
import BuilderSizeSelectorVue from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector.vue";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector.vue";
export default {
  name: "Index",
  components: {
    Header,
    BuilderPizzaViewVue,
    BuilderSizeSelectorVue,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
  computed: {},
};
</script>
<style scoped></style>
