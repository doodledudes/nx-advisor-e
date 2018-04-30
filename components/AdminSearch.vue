<template lang="pug">
  .field.has-addons
    .control.is-expanded
      input.input.is-default.is-medium.is-rounded(type="text", placeholder="Search...")
    //- control
    .control
      a.button.is-success.is-medium.is-rounded
        no-ssr(placeholder='Loading Icons...')
          i.fas.fa-search
        //- no-ssr
      //- a
    //- control
  //- field
</template>

<style>

</style>
