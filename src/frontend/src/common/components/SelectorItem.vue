<template>
  <label :class="name + '__input ' + image">
    <input
      type="radio"
      :name="name"
      class="visually-hidden"
      :value="item.name"
      :checked="item === selectedItem"
      @input="selectItem(item)"
    />
    <span>{{ item.name }}</span>
  </label>
</template>
<script>
export default {
  name: "SelectorItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
    },
    selectedItem: {
      type: Object,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  methods: {
    selectItem(newValue) {
      this.$emit("update:selectedItem", newValue);
    },
  },
};
</script>
