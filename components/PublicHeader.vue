<template lang="pug">
  nav.navbar.is-dark.is-fixed-top
    .container
      .navbar-brand
        a.navbar-item(href="/")
          img(src="@/assets/images/logo.png", alt="Advisor-e.com")
        //- a
        .navbar-burger.burger(data-target="navbarExampleTransparentExample")
          span
          span
          span
        //- navbar-burger
      //- navbar-brand
      #navbarExampleTransparentExample.navbar-menu
        .navbar-start
          a.navbar-item(href="/why-it-works") Why It Works
          a.navbar-item(href="/pricing") Pricing
          a.navbar-item(href="/contact") Contact Us
        //- navbar-start
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                a.button.is-light(href="/login")
                  span Log in
                //- a
              //- p
              p.control
                a.button.is-success(href="/signup")
                  span Free Trial
                //- a
              //- p
            //- field
          //- navbar-item
        //- navbar-end
      //- navbar-menu
    //- container
  //- nav
</template>

<style>

</style>
