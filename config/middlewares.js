module.exports = [
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           'videotest.fra1.digitaloceanspaces.com',
  //         ],
  //         'media-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           'videotest.fra1.digitaloceanspaces.com',
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
