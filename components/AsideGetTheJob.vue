<template lang="pug">
  aside.menu.--admin(v-bind:class="[{'visible': visible}, {'mobile': mobile}]")
    .admin-logo.is-hidden-touch
      img(src='@/assets/images/logo.png', alt='Advisor-E')
    //- admin-logo
    .menu-wrap
      p.menu-label
        | Get The Job
      //- p
      ul.menu-list
        li
          a.is-active Learning
        //- li
        li
          a Doing
        //- li
        li
          a Tracking
          |
          ul
            li
              a Seminar Planning
            //- li
          //- ul
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
