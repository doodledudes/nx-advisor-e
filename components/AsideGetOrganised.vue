<template lang="pug">
  aside.menu.--admin(v-bind:class="[{'visible': visible}, {'mobile': mobile}]")
    .admin-logo.is-hidden-touch
      img(src='@/assets/images/logo.png', alt='Advisor-E')
    //- admin-logo
    .menu-wrap
      p.menu-label
        | Get Organised
      //- p
      ul.menu-list
        li
          a.is-active Capacity Planner
        //- li
        li
          a Advisory Logistics
        //- li
        li
          a Service Matrix
          |
          ul
            li
              a Pricing
            //- li
            |
            li
              a Learning Schedules
            //- li
            |
            li
              a C.O.I. Planning
            //- li
          //- ul
        //- li
        li
          a Reports
        //- li
      //- ul
    //- menu-wrap
  //- aside
</template>

<script>
export default {
  props: ['visible', 'mobile'],
}
</script>
