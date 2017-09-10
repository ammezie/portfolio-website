<template>
  <div class="uk-section uk-padding-remove">
    <div class="uk-container uk-container-expand">
      <navbar></navbar>
    </div>

    <div class="uk-section uk-flex uk-flex-middle uk-text-center" uk-height-viewport="offset-top: true; offset-bottom: true" style="box-sizing: border-box; min-height: calc(100vh - 185px);">
      <div class="uk-width-1-1">
        <div class="uk-container">
          <p class="uk-text-lead">
            Hi, I'm Chimezie Enyinnaya
          </p>
          <p class="uk-text-meta">
            a <span class="emphasis">Software Developer</span> based in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>

    <div class="uk-section-small">
      <div class="uk-container uk-text-center">
        <a class="uk-margin-small-right twitter-link" href="https://twitter.com/ammezie" target="_blank" uk-icon="icon: twitter"></a>
        <a class="uk-margin-small-right github-link" href="https://github.com/ammezie" target="_blank" uk-icon="icon: github"></a>
        <a class="uk-margin-small-right instagram-link" href="https://www.instagram.com/ammezie" target="_blank" uk-icon="icon: instagram"></a>
        <a class="linkedin-link" href="https://www.linkedin.com/in/ammezie" target="_blank" uk-icon="icon: linkedin"></a>
      </div>
    </div>
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

<style scoped>
  a.twitter-link:hover {
    color: #1da1f2
  }

  a.github-link:hover {
    color: #333
  }

  a.instagram-link:hover {
    color: #c13584
  }

  a.linkedin-link:hover {
    color: #0077b5
  }

  .emphasis {
    color: #eb3777
  }
</style>