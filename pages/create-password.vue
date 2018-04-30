<template lang="pug">
  .app-body
    section.hero.is-dark.is-fullheight.login
      .hero-body
        .login-wrap
          img.logo(src="@/assets/images/logo.png", alt="Advisor-e.com")
          .box
            h1.title.is-3 Create Password!
            p Mandaremus ipsum ne nostrud imitarentur id quis ut mentitum a eram quo iis se
            br
            .field
              .control
                input.input(type="password", placeholder="Password", value="")
              //- control
            //- field
            .field
              .control
                input.input(type="password", placeholder="Confirm Password", value="")
              //- control
            //- field
            .field.is-grouped
              p.control
                a.button.is-success(href='/menu-dashboard')
                  | Submit
                //- a
              //- p
            //- field
          //- box
        //- login-wrap
      //- hero-body
    //- section
  //- .app-body
</template>

<script>
export default {
  layout: 'admin',
}
</script>

<style lang="scss">
</style>
