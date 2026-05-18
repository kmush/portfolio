// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/i18n'
  ],
  ssr: false,

  devtools: {
    enabled: true
  },
  app: {
    baseURL: '/portfolio/'
  },

  css: ['~/assets/css/main.css'],

  sourcemap: {
    server: true,
    client: true
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'github-pages',
    publicAssets: [
      { dir: './public', maxAge: 0 }
    ],
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsh', file: 'de.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default', // recommended: /de/about, but /about for English
    langDir: './locales/', // where your translation files will live
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  image: {
    provider: 'ipx',
    dir: 'public',
    quality: 80
  }

})
