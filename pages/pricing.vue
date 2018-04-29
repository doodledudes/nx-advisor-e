<template lang="pug">
  .app-body
    section.section.drilldown.pricing
      .container
        h3.title.is-1.has-text-centered Pricing
        br
        .columns.has-text-centered
          .column.is-6-tablet.is-12-mobile.is-3-desktop
            .price.card.option-1
              .heading
                h1.title Lite Fundamentals
              //- heading
              .cost $500 / mth
              .content
                .features.is-size-5
                  p 9 Growth Stages
                  p 5 Layers of Complexity
                  p 7 Growth Tactics
                //- features
              //- content
              .learn
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Lite Fundamentals', data-content='')
                  strong What You Learn
                //- a
              //- learn
              .btn
                a.button.is-light.is-medium(href='') Select
              //- btn
              .note Aimed at securing client engagements in the
                br
                | $500 - $750/mth range
            //- price
          //- column
          .column.is-6-tablet.is-12-mobile.is-3-desktop
            .price.card.option-2
              .heading
                h1.title Expert Fundamentals
              //- heading
              .cost $750 / mth
              .content
                .features.is-size-5
                  p 9 Growth Stages
                  p 5 Layers of Complexity
                  p 7 Growth Tactics
                //- features
              //- content
              .learn
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Expert Fundamentals', data-content='')
                  strong What You Learn
                //- a
              //- learn
              .btn
                a.button.is-light.is-medium(href='') Select
              //- btn
              .note Aimed at increasing client engagements in the
                br
                | $1,000 - $1,500/mth range
            //- price
          //- column
          .column.is-6-tablet.is-12-mobile.is-3-desktop
            .price.card.option-3
              .heading
                h1.title Advanced Growth Fundamentals
              //- heading
              .cost $1,000 / mth
              .content
                .features.is-size-5
                  p 9 Growth Aspects Material
                //- features
              //- content
              .learn
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Advanced Growth Fundamentals', data-content='')
                  strong What You Learn
                //- a
              //- learn
              .btn
                a.button.is-light.is-medium(href='') Select
              //- btn
              .note Aimed at increasing client engagements in the
                br
                | $2,000 + mth range
            //- price
          //- column
          .column.is-6-tablet.is-12-mobile.is-3-desktop
            .price.card.option-4
              .heading
                h1.title 5 Domains Mastery
              //- heading
              .cost $500 / mth
                span.is-size-5 &nbsp;/ person
              .content
                .features.is-size-5
                  p 5 Domains Formula Framework
                //- features
              //- content
              .learn
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='5 Domains Mastery', data-content='')
                  strong What You Learn
                //- a
              //- learn
              .btn
                a.button.is-light.is-medium(href='') Select
              //- btn
              .note Restricted Attendance
            //- price
          //- column
        //- columns
      //- container
    //- section
  //- .app-body
</template>

<script>
export default {
  layout: 'public',
  methods: {
    dialogPricing(event) {
      this.$dialog.alert({
        title: event.currentTarget.getAttribute('data-title'),
        message: event.currentTarget.getAttribute('data-content'),
        confirmText: 'Select',
        canCancel: true
      })
    },
  }
}
</script>

<style lang="scss">
</style>
