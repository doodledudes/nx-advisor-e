<template lang="pug">
  div
    Header
    <nuxt/>
    Footer
</template>
<script>
import Header from '~/components/PublicHeader.vue'
import Footer from '~/components/PublicFooter.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">

</style>
