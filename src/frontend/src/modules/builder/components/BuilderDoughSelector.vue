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
    return { Doughs: this.doughs };
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
  methods: {
    setSelected(selectedDough) {
      this.Doughs.forEach((dough) => {
        dough.selected = false;
        if (dough.id === selectedDough.id) dough.selected = true;
      });
      this.$emit("update:doughs", this.Doughs);
    },
  },
  // watch: {
  //   Doughs(newValue) {
  //     this.$emit("update:doughs", newValue);
  //   },
  // },
};
</script>
