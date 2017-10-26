<template>
  <div class="uk-offcanvas-content">
    <div class="uk-section uk-padding-remove">
      <div class="uk-container uk-container-expand">
        <navbar></navbar>
      </div>

      <nuxt/>
      <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
        <div class="uk-offcanvas-bar">
          <ul class="uk-nav uk-nav-primary uk-nav-center">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/work">Work</nuxt-link></li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Logo from '~/assets/images/logo.png'

  export default {
    data () {
      return {
        prodBaseUrl: ''
      }
    },
    components: {
      Navbar
    },
    head () {
      return {
        meta: [
          // Open Graph
          { property: 'og:site_name', content: 'Chimezie Enyinnaya' },
          { property: 'og:url', content: 'https://chimezieenyinnaya.xyz' },
          { property: 'og:title', content: 'Chimezie Enyinnaya: a Software Developer based in Lagos, Nigeria' },
          { property: 'og:description', content: 'I\'m Chimezie Enyinnaya, a Software Developer based in Lagos, Nigeria' },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: this.prodBaseUrl + Logo },
          // Twitter Card
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@ammezie' },
          { name: 'twitter:title', content: 'Chimezie Enyinnaya: a Software Developer based in Lagos, Nigeria' },
          { name: 'twitter:description', content: 'I\'m Chimezie Enyinnaya, a Software Developer based in Lagos, Nigeria' },
          { name: 'twitter:image', content: this.prodBaseUrl + Logo }
        ]
      }
    },
    created: function () {
      if (process.env.NODE_ENV === 'production') {
        this.prodBaseUrl = 'https://chimezieenyinnaya.xyz'
      } else {
        this.prodBaseUrl = 'http://localhost:3000'
      }
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
  .uk-offcanvas-bar {
    background-color: #fff;
  }
  .uk-nav-primary > li > a {
    color: #999 !important
  }
  .uk-nav-primary > li.uk-active > a,
  .uk-nav-primary > li > a:focus,
  .uk-nav-primary > li > a:hover {
    color: #eb3777 !important
  }
</style>
