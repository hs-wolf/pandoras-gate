// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Pandoras Gate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pandoras Gate TTRPG' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n', 'nuxt-icons'],
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
});
