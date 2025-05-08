// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  modules: [
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-K5SKJM3F', // Cseréld le a saját GTM azonosítódra
    enabled: process.env.NODE_ENV === 'production', // Engedélyezze csak a produkciós környezetben
    debug: true, // Csak fejlesztési környezetben, hogy lássuk az eseményeket
    pageTracking: true,
  },
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtm.js?id=GTM-K5SKJM3F',
          async: true
        }
      ]
    }
  }
});
