<template>
  <div class="app-layout-main">
    <h1>!!!</h1>
  </div>
</template>

<script>
import AppLayoutHeader from '@/layouts/AppLayoutHeader.vue' 

export default  {
  name: 'AppLayoutMain',
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
