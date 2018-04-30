<template lang="pug">
  div
    public-header
    <nuxt/>
    public-footer
</template>
<script>
import Header from '~/components/PublicHeader.vue'
import Footer from '~/components/PublicFooter.vue'

export default {
  head: {
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  components: {
    'public-header': Header,
    'public-footer': Footer
  }
}
</script>
<style lang="scss">

</style>
