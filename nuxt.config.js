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
        src: 'https://www.googletagmanager.com/gtm.js?id=GTM-K5SKJM3F',
      },
       {
          hid: 'gtag',
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=GT-MKP7JJ26'
        },
        {
          hid: 'gtag-config',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-MKP7JJ26', { debug_mode: true });
          `,
          type: 'text/javascript'
        }
    ],
    __dangerouslyDisableSanitizers: ['script']
  }
  },
};
