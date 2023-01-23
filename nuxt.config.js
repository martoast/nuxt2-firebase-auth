export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PinClick Auth',
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
    "bootstrap-vue/nuxt",
    "@nuxtjs/dotenv",
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTHDOMAIN,
          projectId: process.env.FIREBASE_PROJECTID,
          storageBucket: process.env.FIREBASE_STORAGEBUCKET,
          messagingSenderId: process.env.FIREBASE_MESSEAGINGSENDERID,
          appId: process.env.FIREBASE_APPID
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
