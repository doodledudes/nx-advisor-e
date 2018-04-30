<template lang="pug">
  .app-body
    section.hero.is-dark.is-fullheight.login
      .hero-body
        .login-wrap
          img.logo(src="@/assets/images/logo.png", alt="Advisor-e.com")
          .box
            h1.title.is-3 Welcome!
            .field
              .control
                input.input(type="text", placeholder="First Name", value="")
              //- control
            //- field
            .field
              .control
                input.input(type="text", placeholder="Last Name", value="")
              //- control
            //- field
            .field
              .control
                input.input(type="email", placeholder="Email Address", value="")
              //- control
            //- field
            .field
              .control
                input.input(type="phone", placeholder="Phone Number", value="")
              //- control
            //- field
            .field
              .control
                input.input(type="text", placeholder="Organisation Name", value="")
              //- control
            //- field
            .field
              .control
                label.checkbox
                  input(type="checkbox")
                  span I have read and agree to the&nbsp;
                    a(href='') Terms and Conditions
                //- label
              //- control
            //- field
            .field
              p.control.has-text-info
                | Google Captcha goes here...
              //- p
            //- field
            .field.is-grouped
              p.control
                a.button.is-success(href='/create-password')
                  | Sign Up
                //- a
              //- p
            //- field
            hr
            p.has-text-centered Already have an account?&nbsp;
              a.has-text-primary(href='/login') Log In
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
