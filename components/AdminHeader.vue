<template lang="pug">
  nav.navbar.is-white.is-fixed-top.top-bar
    .navbar-brand.is-hidden-desktop
      .navbar-burger.burger.mobile-menu.is-hidden-desktop(@click='toggleMobileMenu')
        span
        span
        span
      //- navbar-burger
      a.navbar-item(href="")
        img(src='@/assets/images/logo.png', alt='Advisor-E')
      //- a
      .navbar-burger.burger.menu-drop(data-target="navbarExampleTransparentExample", @click="toggleNavbar()", v-bind:class="{'is-active': isActive}")
        no-ssr(placeholder='Loading Icons...')
          i.fa.fa-angle-down
        //- no-ssr
      //- navbar-burger
    //- navbar-brand
    #navbarExampleTransparentExample.navbar-menu(v-bind:class="{'is-active': isActive}")
      .navbar-start
        a.navbar-item(href="/dashboard-get-organised")
          | Get Organised
        //- a
        a.navbar-item(href="/dashboard-get-the-job")
          | Get The Job
        //- a
        a.navbar-item(href="/dashboard-do-the-job")
          | Do The Job
        //- a
      //- navbar-start
      .navbar-end
        a.navbar-item(href="")
          | Help
        //- a
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link(href="")
            no-ssr(placeholder='Loading Icons...')
              i.fas.fa-user-circle
            //- no-ssr
          //- a
          .navbar-dropdown.is-boxed.is-right
            a.navbar-item(href="")
              | My Account
            //- a
            a.navbar-item(href="/")
              | Log Out
            //- a
          //- navbar-dropdown
        //- navbar-item
      //- navbar-end
    //- navbar-menu
  //- nav

</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    }
  },
  props: ['visible'],
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    },
    toggleMobileMenu: function() {
      this.$emit('update:visible', !this.visible)
    },
  }
}
</script>
