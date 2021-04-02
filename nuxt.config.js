export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/NMDLV-altura-tech/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'El medidor de altura tech - No me da la vida',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Podrás ver cómo sería estar al lado de Miriam González y Alba Silvente las creadoras del podcast No me da la vida. ¡Mídete y pásanos captura!' },
      { hid: 'og:title', property: 'og:title', content: 'El medidor de altura tech - No me da la vida' },
      {
        hid: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: 'El medidor de altura tech - No me da la vida',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Podrás ver cómo sería estar al lado de Miriam González y Alba Silvente las creadoras del podcast No me da la vida. ¡Mídete y pásanos captura!",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dawntraoz.github.io/NMDLV-altura-tech/logo.png',
      },
      {
        hid: 'og:publish_date',
        name: 'publish_date',
        property: 'og:publish_date',
        content: '2021-04-03T00:00:00-0500',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    jit: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      theme_color: '#3221AB',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
