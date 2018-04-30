<template lang="pug">
  .app-body
    admin-side-menu(:visible='isVisible', :mobile='isMobile')
    admin-header(:visible.sync='isVisible')
    .admin-wrap
      .container.is-fluid
        admin-search
        br
      //- container
    //- section
  //- .app-body
</template>

<script>
import Header from '~/components/AdminHeader.vue'
import Aside from '~/components/AsideGetTheJob.vue'
import Search from '~/components/AdminSearch.vue'
import { Toggle } from '~/mixins/toggle.js'

export default {
  components: {
    'admin-side-menu': Aside,
    'admin-header': Header,
    'admin-search': Search
  },
  layout: 'admin',
  mixins: [Toggle] // props can be found here
}
</script>
