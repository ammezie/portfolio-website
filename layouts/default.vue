<template>
  <div class="uk-section uk-padding-remove">
    <div class="uk-container uk-container-expand">
      <navbar></navbar>
    </div>

    <nuxt/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    components: {
      Navbar
    }
  }
</script>


<style>
  html {
    font-family: 'PT Sans', "Helvetica Neue", Arial, sans-serif;
  }
  .uk-h1, .uk-h2, .uk-h3, .uk-h4, .uk-h5, .uk-h6, h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Sans', "Helvetica Neue", Arial, sans-serif;
  }
  .uk-link, a {
    color: #eb3777
  }
  .uk-link:hover, a:hover {
    color: #0086c2
  }
</style>
