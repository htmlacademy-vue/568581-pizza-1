<template>
  <div class="app-layout-main">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from './AppLayoutHeader.vue' 

export default  {
  name: "AppLayoutMain",
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
