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
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Lite Fundamentals', data-content='Learn the fundamentals of using conceptual hierarchies to guide consultancy work and the basics of selling on a campaign basis. (Very basic understanding of systems theory) Designed to build the confidence of accountants wishing to move into advisory work.  Simple concepts, quick wins, low cost.')
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
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Expert Fundamentals', data-content='Widen the depth of consultancy content based on the existing "Lite" framework and extend the lifecycle of current consultancy engagements; cementing you as their "Strategic Advisor". Content includes four planning templates that provide a detailed exploration of your client&#39;s Business Targets, Strategic Orientation, Organisation Culture &amp; Efficiencies and lastly, their Sales &amp; Marketing procedures.')
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
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='Advanced Growth Fundamentals', data-content='You&#39;ll learn the remaining Framework elements &amp; develop an understanding of the &#39;complete firm&#39; delivery as opposed to individual consultancy provider. Designed for accountants that aren’t content to deal with smaller clients and who understand that &#39;skills create demand&#39; on an individual and team basis. This is about shifting from a &#39;Leveraged Compliance&#39; practice to a &#39;Leveraged Advisory&#39; practice. Internal learnings include how to successfully Cold Approach a target profile, Scope &amp; Present a Total Needs Based Service Offer. Client content includes material relating to Governance, Employee Motivation, Owner Succession, Leadership Styles and more. Designed for accountants intent on growing their fee base.')
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
                a.button.is-text.has-text-grey(@click="dialogPricing($event)", data-title='5 Domains Mastery', data-content='Based on the 5 Domains Formula Framework, this programme coaches the most advanced techniques to enable Directors to lead their practice in the areas of Creativity &amp; Strategic Thinking, Strategic Relationships, Sales, Marketing, Public Speaking &amp; Team Empowerment.')
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
