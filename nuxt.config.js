module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'I\'m Chimezie Enyinnaya, a Software Developer based in Lagos, Nigeria',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I\'m Chimezie Enyinnaya, a Software Developer based in Lagos, Nigeria' },
      { hid: 'theme-color', name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.30/css/uikit.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.30/js/uikit.min.js' },
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.30/js/uikit-icons.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#eb3777' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    linkActiveClass: 'uk-active'
  },
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-106389620-1' }]
  ]
}
