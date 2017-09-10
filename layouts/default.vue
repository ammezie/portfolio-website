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
</style>
