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

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>
              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="sauce in pizza.sauces"
                    :key="sauce.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.name"
                      checked
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>
                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="(ingredient, index) in pizza.ingredients"
                      :key="ingredient.id"
                      class="ingredients__item"
                    >
                      <span class="filling" :class="ingredientVal[index]">
                        {{ ingredient.name }}</span
                      >
                      <RadioButtonVue />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
              <p>Итого: 0 ₽</p>
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
import RadioButtonVue from "@/common/components/RadioButton.vue";
import BuilderPizzaViewVue from "@/modules/builder/components/BuilderPizzaView.vue";
import BuilderSizeSelectorVue from "@/modules/builder/components/BuilderSizeSelector.vue";
export default {
  name: "Index",
  components: {
    RadioButtonVue,
    BuilderPizzaViewVue,
    BuilderSizeSelectorVue,
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
    pizzaImage: function () {
      return this.pizza.sizes.map(function (size) {
        if (!size) return "";
        switch (size.multiplier) {
          case 1:
            return "diameter__input--small";
          case 2:
            return "diameter__input--normal";
          case 3:
            return "diameter__input--big";
          default:
            return "diameter__input--normal";
        }
      });
    },
    pizzaVal: function () {
      return this.pizza.sizes.map(function (size) {
        if (!size) return "";
        switch (size.multiplier) {
          case 1:
            return "small";
          case 2:
            return "normal";
          case 3:
            return "big";
          default:
            return "normal";
        }
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
