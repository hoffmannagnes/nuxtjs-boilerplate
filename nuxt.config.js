// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  app: {
    cdnURL: '/',
   head: {
    script: [
      {
        hid: 'gtm',
        async: true,
        src: 'https://www.googletagmanager.com/gtm.js?id=GTM-K5SKJM3F'
      },
      {
        hid: 'gtm-dataLayer',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
        `,
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
  },
};
