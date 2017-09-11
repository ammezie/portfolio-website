<template>
  <div>
    <intro></intro>
    <div class="uk-section-small">
      <social-links></social-links>
    </div>
  </div>
</template>

<script>
  import Intro from '../components/Home/Intro.vue'
  import SocialLinks from '../components/Home/SocialLinks.vue'

  export default {
    components: {
      Intro,
      SocialLinks
    }
  }
</script>

<style scoped> 
</style>