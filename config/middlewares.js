module.exports = [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {


'img-src': [
  "'self'",
  'data:',
  'blob:',
  'https://tiredeals-media-assets.sfo3.digitaloceanspaces.com',
],

'media-src': [
  "'self'",
  'data:',
  'blob:',
  'https://tiredeals-media-assets.sfo3.digitaloceanspaces.com',
],

        },
      },
    },
  },

  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];