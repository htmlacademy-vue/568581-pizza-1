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
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>
              <div class="sheet__content diameter">
                <label
                  v-for="(size, index) in pizza.sizes"
                  :key="size.id"
                  class="diameter__input"
                  :class="pizzaImage[index]"
                >
                  <input
                    type="radio"
                    name="diameter"
                    class="visually-hidden"
                    :value="pizzaVal[index]"
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

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
                      v-for="(ingridient, index) in pizza.ingredients"
                      :key="ingridient.id"
                      class="ingredients__item"
                    >
                      <span class="filling" :class="ingridientVal[index]">
                        {{ ingridient.name }}</span
                      >
                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
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

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>
            <div class="content__result">
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
export default {
  name: "Index",
  data() {
    return {
      misc,
      pizza,
      user,
    };
  },
  computed: {
    ingridientVal: function () {
      return this.pizza.ingredients.map(function (ingridient) {
        if (!ingridient) return "";
        return (
          "filling--" + ingridient.image.split("/").slice(-1)[0].slice(0, -4)
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
