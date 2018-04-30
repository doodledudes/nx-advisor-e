<template lang="pug">
  .app-body
    section.hero.is-dark.is-fullheight.login
      .hero-body
        .login-wrap
          img.logo(src="@/assets/images/logo.png", alt="Advisor-e.com")
          .box
            h1.title.is-3 Hello!
            p Mandaremus ipsum ne nostrud imitarentur id quis ut mentitum a eram quo iis se
            br
            .field
              .control.has-icons-left.has-icons-right
                input.input(type="email", placeholder="Username or Email", value="")
                span.icon.is-small.is-left
                  no-ssr(placeholder='Loading Icons...')
                    i.fas.fa-envelope
                  //- no-ssr
                //- span
              //- control
            //- field
            .field
              .control.has-icons-left.has-icons-right
                input.input(type="password", placeholder="Password", value="")
                span.icon.is-small.is-left
                  no-ssr(placeholder='Loading Icons...')
                    i.fas.fa-key
                  //- no-ssr
                //- span
              //- control
            //- field
            .columns.is-flex
              .column.is-7
                .field
                  b-switch(:value='true', type='is-success') Keep me logged in
                //- field
              //- column
              .column.has-text-right
                a.has-text-primary(href='') Forgot Password?
              //- column
            //- columns
            .field.is-grouped
              p.control
                a.button.is-success(href='/dashboard-get-organised')
                  | Log in
                //- a
              //- p
            //- field
            hr
            p.has-text-centered Don't have an account?&nbsp;
              a.has-text-primary(href='/signup') Sign Up Now
            //- p
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
