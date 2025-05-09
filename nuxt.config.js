// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  head: {
    script: [
      {
        hid: 'gtag',
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-E39NSFHYTT'
      },
      {
        hid: 'gtag-config',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E39NSFHYTT'); // Az Analytics mérőkódod
        `,
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
};
