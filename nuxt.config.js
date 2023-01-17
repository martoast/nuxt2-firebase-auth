export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pinclick',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDTYx-D0k7HZgDZ6EFsiNaWbWLMJWorrhc",
          authDomain: "pinclick-d754d.firebaseapp.com",
          projectId: "pinclick-d754d",
          storageBucket: "pinclick-d754d.appspot.com",
          messagingSenderId: "597227273470",
          appId: "1:597227273470:web:8714df15eccef3ff7bb9af"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  auth: {
    persistence: 'local', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false
    },
    ssr: false, // default
    emulatorPort: 9099,
    emulatorHost: 'http://localhost',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
