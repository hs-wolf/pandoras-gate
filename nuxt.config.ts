// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Nuxt3 Template App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt3 Template App' },
        { name: 'theme-color', content: '#000000' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['assets/css/global.css'],
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
  tailwindcss: {},
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
    lazy: true,
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
