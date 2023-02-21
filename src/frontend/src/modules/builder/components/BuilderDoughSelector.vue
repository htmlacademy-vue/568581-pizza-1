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
          v-for="(dough, index) in this.doughs"
          :key="dough.id"
          class="dough__input"
          :class="pizzaDough[index]"
        >
          <input
            type="radio"
            :value="dough.name"
            name="dough"
            :checked="dough === selectedDough"
            class="visually-hidden"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
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
    return {};
  },
  components: {},
  props: {
    doughs: {
      type: Array,
    },
    selectedDough: {
      type: Object,
    },
  },
  computed: {
    pizzaDough: function () {
      return this.doughs.map(function (dough) {
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
