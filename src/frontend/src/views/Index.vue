<template>
  <body>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="#">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>
              <div class="sheet__content dough">
                <label
                  v-for="(dough, index) in pizza.dough"
                  :key="dough.id"
                  class="dough__input"
                  :class="pizzaDough[index]"
                >
                  <input
                    type="radio"
                    :value="pizzaDoughVal[index]"
                    name="dought"
                  />
                  <b>{{ dough.name }}</b>
                  <span>{{ dough.description }}</span>
                </label>
              </div>
            </div>
          </div>
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
            <div class="content__result">
              <BuilderPizzaViewVue />
              <BuilderPriceCounter />
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
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
import BuilderPizzaViewVue from "@/modules/builder/components/BuilderPizzaView.vue";
import BuilderSizeSelectorVue from "@/modules/builder/components/BuilderSizeSelector.vue";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter.vue";
import BuilderIngredientsSelector from "../modules/builder/components/BuilderIngredientsSelector.vue";
export default {
  name: "Index",
  components: {
    BuilderPizzaViewVue,
    BuilderSizeSelectorVue,
    BuilderPriceCounter,
    BuilderIngredientsSelector,
  },
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
  computed: {
    ingredientVal: function () {
      return this.pizza.ingredients.map(function (ingredient) {
        if (!ingredient) return "";
        return (
          "filling--" + ingredient.image.split("/").slice(-1)[0].slice(0, -4)
        );
      });
    },

    pizzaDough: function () {
      return this.pizza.dough.map(function (dough) {
        if (!dough.name) {
          return "";
        } else if (dough.name == "Тонкое") {
          return "dough__input--light";
        } else if (dough.name == "Толстое") {
          return "dough__input--large";
        }
      });
    },
    pizzaDoughVal: function () {
      return this.pizza.dough.map(function (dough) {
        if (!dough.name) {
          return "";
        } else if (dough.name == "Тонкое") {
          return "light";
        } else if (dough.name == "Толстое") {
          return "large";
        }
      });
    },
  },
};
</script>
<style scoped></style>
