<template>
    <div class="uk-section uk-text-center">
        <div class="uk-width-1-1">
            <div class="uk-container">
                <h1 class="uk-heading-bullet">Contact Me</h1>

                <p>
                    You can get in touch with me at <a href="mailto:meziemichael@gmail.com">meziemichael@gmail.com</a>, I'd love to chat.
                </p>
                <p>
                    You can also find me on
                </p>

                <social-links></social-links>
            </div>
        </div>
    </div>
</template>

<script>
  import SocialLinks from '../components/Home/SocialLinks.vue'

  export default {
    components: {
      SocialLinks
    }
  }
</script>

<style scoped>
    a {
        text-decoration: none
    }
</style>