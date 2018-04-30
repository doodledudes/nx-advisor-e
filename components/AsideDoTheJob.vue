<template lang="pug">
  aside.menu.--admin(v-bind:class="[{'visible': visible}, {'mobile': mobile}]")
    .admin-logo.is-hidden-touch
      img(src='@/assets/images/logo.png', alt='Advisor-E')
    //- admin-logo
    .menu-wrap
      p.menu-label
        | Do The Job
      //- p
      ul.menu-list
        li
          a.is-active Client Drag Folders
        //- li
        li
          a Framework Tutorials
        //- li
        li
          a Client Advisory Resource
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
