<template>
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
            :value="dough.name"
            name="dough"
            class="visually-hidden"
            v-model="Dough"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
//import pizza from "@/static/pizza.json";
export default {
  name: "BuilderDoughSelector",
  data() {
    return {
      Dough: this.dough,
    };
  },
  props: {
    pizza: {
      type: Object,
    },
    dough: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  computed: {
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
  watch: {
    Dough(newValue) {
      this.$emit("update:dough", newValue);
    },
  },
};
</script>
