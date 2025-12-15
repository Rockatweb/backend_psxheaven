const strapi = require('@strapi/strapi');

const app = strapi.createStrapi({
  autoReload: false,
  serveAdminPanel: true,
  distDir: './dist'
});

app.start();