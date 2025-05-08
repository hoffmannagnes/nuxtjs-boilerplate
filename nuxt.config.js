// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  modules: ['@nuxtjs/gtm'],
  gtm: {
    id: 'GTM-K5SKJM3F',
    enabled: true,
    debug: true,
  },
});
