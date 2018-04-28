<template lang="pug">
  .app-body
    section.hero.is-dark.is-large
      .hero-body
        .container
          h1.title
            | Growing Your Advisory Fees
          //- h1
          h2.subtitle.is-3
            | One Meaningful Client Meeting At A Time
          //- h2
        //- container
      //- hero-body
    //- section
    section.section.growing-business
      .container
        .columns
          .column.is-hidden-mobile
            //- img(src='assets/images/man-thinking.png')
          //- column
          .column.is-7
            h3.title.is-1 Growing A Business Is Tough!
            p.is-size-4 In a world of rapid change, many business owners are forced to make decisions with little understanding of the forces at play...
            //- p
            br
            p.is-size-4
              | Is it any wonder that SME owners struggle to capitalise on their hard work and financial risk?
            //- p
            br
            h4.title.is-2.has-text-primary Who's Going To Help Them?
          //- column
        //- columns
      //- container
    //- section
    section.section.home-icons
      .container
        .columns
          .column.has-text-centered
            no-ssr(placeholder='Loading Icon...')
              a(href='dashboard-get-organised.html')
                span.fa-9x
                  span.fa-layers.fa-fw
                    i.fas.fa-circle
                    |
                    i.fa-inverse.fas.has-text-success.fa-chart-line(data-fa-transform="shrink-8")
                  //- span
                //- fa
              //- a
            //- no-ssr
            p.is-size-3 Get Organised
            br
            p.is-size-5 Gain clarity in your actions by accurately planning your logistics. This is the most often overlooked aspect by accounting firms transitioning into advisory services. Use our proven templates to know exactly what to do, and when to do it.
          //- column
          .column.has-text-centered
            no-ssr(placeholder='Loading Icon...')
              a(href='dashboard-get-the-job.html')
                span.fa-9x
                  span.fa-layers.fa-fw
                    i.fas.fa-circle
                    |
                    i.fa-inverse.fas.has-text-success.fa-hand-holding-usd(data-fa-transform="shrink-8")
                  //- span
                //- fa
              //- a
            //- no-ssr
            p.is-size-3 Get The Job
            br
            p.is-size-5 Make it easy on yourself and your clients by using our templates to articulate the value, remove the confusion and secure agreement to work more closely with you.
          //- column
          .column.has-text-centered
            no-ssr(placeholder='Loading Icon...')
              a(href='dashboard-do-the-job.html')
                span.fa-9x
                  span.fa-layers.fa-fw
                    i.fas.fa-circle
                    |
                    i.fa-inverse.fas.has-text-success.fa-wrench(data-fa-transform="shrink-8")
                  //- span
                //- fa
              //- a
            //- no-ssr
            p.is-size-3 Do The Job
            br
            p.is-size-5 Transform Your Business From A Leveraged Compliance Model To A Leveraged Advisory Practice with our superb coaching material and delivery templates. Everything you need to know, every step of the way... "The biggest thing you'll notice is the joy that comes from doing work that makes you proud, with people that make you smile..."
          //- column
        //- columns
      //- container
    //- section
    section.section.approach
      .container
        .columns.d-flex-mobile
          .column.is-7
            p.is-size-4 Let's be honest. Winning 'A' clients and transitioning your accounting practice into advisory services is really hard; it seems the more you try to make changes, the more your business acts like quicksand and 'sucks you back in' to work load.
            br
            h3.title.has-text-primary If you're serious about achieving what matters most, you need a different approach.
            p.is-size-4 Any accountant can grow their advisory fee base by using the Advisor-E consultancy framework because it makes securing and delivering the work so much easier. Proven cognitive templates align you and your client to make the road ahead clear and provides fantastic leverage across your team.
          //- column
          .column
            img.graph(src='~/assets/images/img-graph.jpg')
          //- column
        //- columns
      //- container
    //- section
  //- .app-body
</template>

<script>
export default {
  layout: 'public'
}
</script>

<style lang="scss">
</style>
