<template lang="pug">
  .app-body
    section.hero.is-dark.is-fullheight.menu-dashboard
      .hero-body
        .container
          .has-text-centered
            img(src="@/assets/images/logo.png", alt="Advisor-e.com")
          //- has-text-centered
          br
          .columns
            .column.has-text-centered
              a(href='/dashboard-get-organised')
                no-ssr(placeholder='Loading Icons...')
                  span.fa-9x
                    span.fa-layers.fa-fw
                      i.fas.fa-circle
                      |
                      i.fa-inverse.fas.has-text-success.fa-chart-line(data-fa-transform="shrink-8")
                    //- span
                  //- fa
                //- no-ssr
              //- a
              p.is-size-3 Get Organised
              br
              p.is-size-5 Gain clarity in your actions by accurately planning your logistics. This is the most often overlooked aspect by accounting firms transitioning into advisory services. Use our proven templates to know exactly what to do, and when to do it.
            //- column
            .column.has-text-centered
              a(href='/dashboard-get-the-job')
                no-ssr(placeholder='Loading Icons...')
                  span.fa-9x
                    span.fa-layers.fa-fw
                      i.fas.fa-circle
                      |
                      i.fa-inverse.fas.has-text-success.fa-hand-holding-usd(data-fa-transform="shrink-8")
                    //- span
                  //- fa
                //- no-ssr
              //- a
              p.is-size-3 Get The Job
              br
              p.is-size-5 Make it easy on yourself and your clients by using our templates to articulate the value, remove the confusion and secure agreement to work more closely with you.
            //- column
            .column.has-text-centered
              a(href='/dashboard-do-the-job')
                no-ssr(placeholder='Loading Icons...')
                  span.fa-9x
                    span.fa-layers.fa-fw
                      i.fas.fa-circle
                      |
                      i.fa-inverse.fas.has-text-success.fa-wrench(data-fa-transform="shrink-8")
                    //- span
                  //- fa
                //- no-ssr
              //- a
              p.is-size-3 Do The Job
              br
              p.is-size-5 Transform Your Business From A Leveraged Compliance Model To A Leveraged Advisory Practice with our superb coaching material and delivery templates. Everything you need to know, every step of the way... "The biggest thing you'll notice is the joy that comes from doing work that makes you proud, with people that make you smile..."
            //- column
          //- columns
        //- container
      //- hero-body
    //- section
    public-footer
  //- .app-body
</template>

<script>
import Footer from '~/components/PublicFooter.vue'

export default {
  components: {
    'public-footer': Footer
  },
  layout: 'admin',
}
</script>

<style lang="scss">
</style>
