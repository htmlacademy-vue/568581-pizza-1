<template>
  <component 
  :is="layout"
  :mick="mick"
  :pizza="pizza"
  :user="user"
  >
    <slot />
  </component>
</template>
<script>
const defaultLayout = "AppLayoutDefault"

export default {
  name: 'AppLayout',
  props: {
    mick: {
      type: Object,
      required: true,
    },
    pizza: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    }
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  }
};
</script>
