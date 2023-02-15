<template>
  <div class="sheet__content dough">
    <label class="dough__input" :class="pizzaDough">
      <input
        type="radio"
        :value="dough.name"
        name="dough"
        @input="setSelected"
        class="visually-hidden"
      />
      <b>{{ this.Dough.name }}</b>
      <span>{{ this.Dough.description }}</span>
    </label>
  </div>
</template>
<script>
export default {
  name: "Dough",
  data() {
    return {
      Dough: this.dough,
    };
  },
  props: {
    dough: {
      type: Object,
    },
  },
  computed: {
    pizzaDough: function () {
      if (this.Dough.name == "Тонкое") {
        return "dough__input--light";
      } else if (this.Dough.name == "Толстое") {
        return "dough__input--large";
      }
      return "";
    },
    pizzaDoughVal: function () {
      if (this.Dough.name == "Тонкое") {
        return "light";
      } else if (this.Dough.name == "Толстое") {
        return "large";
      }
      return "";
    },
  },
  methods: {
    setSelected() {
      if (!this.Dough.selected) this.Dough.selected = true;
      this.$emit("setSelected", this.Dough);
    },
  },
};
</script>
