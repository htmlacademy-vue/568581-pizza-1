<template>
  <div class="app-layout-default">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from './AppLayoutHeader.vue' 

export default  {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader
  },
  props: {
    misc: {
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
    },
  }
}
</script>
