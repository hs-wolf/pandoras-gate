// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: 'AIzaSyBornH3NwCcRH_1mFE1hK6KP5nidBokjrs',
        authDomain: 'pandoras-gate-11192.firebaseapp.com',
        projectId: 'pandoras-gate-11192',
        storageBucket: 'pandoras-gate-11192.appspot.com',
        messagingSenderId: '861573688033',
        appId: '1:861573688033:web:03161ed2b241fdaf65a5a0',
      },
    },
  },
  srcDir: 'src/',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Pandoras Gate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pandoras Gate' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['assets/css/global.css', 'assets/css/transitions.css'],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icons',
    '@nuxt/image',
    '@nuxtjs/eslint-module',
  ],
  // https://github.com/nuxt-community/robots-module
  robots: {},
  // https://github.com/nuxt-modules/tailwindcss
  tailwindcss: {
    viewer: false,
  },
  // https://github.com/vueuse/vueuse
  vueuse: {},
  // https://github.com/vuejs/pinia/tree/v2/packages/nuxt
  pinia: {
    autoImports: ['acceptHMRUpdate', 'defineStore', 'storeToRefs'],
  },
  // https://github.com/nuxt-modules/i18n
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.yaml',
      },
      {
        code: 'pt',
        file: 'pt.yaml',
      },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
  },
  // https://github.com/gitFoxCode/nuxt-icons
  nuxtIcons: {},
  // https://github.com/nuxt/image
  image: {},
  // https://github.com/nuxt-community/eslint-module
  eslint: {
    lintOnStart: false,
  },
})
