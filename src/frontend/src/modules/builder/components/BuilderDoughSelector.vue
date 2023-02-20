<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <!-- <Dough
          v-for="dough in this.Doughs"
          :key="dough.id"
          :dough="dough"
          @setSelected="setSelected"
        /> -->
        <label
          v-for="(Dough, index) in this.Doughs"
          :key="Dough.id"
          class="dough__input"
          :class="pizzaDough[index]"
        >
          <input
            type="radio"
            :value="Dough.name"
            name="dough"
            v-model="dough.name"
            class="visually-hidden"
          />
          <b>{{ Dough.name }}</b>
          <span>{{ Dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
//import Dough from "@/modules/builder/components/BuilderDough.vue";
export default {
  name: "BuilderDoughSelector",
  data() {
    return { Doughs: this.doughs, Dough: this.dough };
  },
  components: {},
  props: {
    doughs: {
      type: Array,
    },
    dough: {
      type: Object,
    },
  },
  computed: {
    pizzaDough: function () {
      return this.Doughs.map(function (dough) {
        switch (dough.name) {
          case "Тонкое":
            return "dough__input--light";
          case "Толстое":
            return "dough__input--large";
          default:
            return "";
        }
      });
    },
  },
  methods: {
    // pizzaDoughVal: function () {
    //   if (this.Doughs.name == "Тонкое") {
    //     return "light";
    //   } else if (this.Doughs.name == "Толстое") {
    //     return "large";
    //   }
    //   return "";
    // },
  },
  watch: {
    Dough(newValue) {
      this.$emit("update:dough", newValue);
    },
  },
};
</script>
