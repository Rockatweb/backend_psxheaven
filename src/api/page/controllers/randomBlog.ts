import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({
    async random(ctx) {
      const numberOfEntries = 1;

      const entries = await strapi.entityService.findMany(
        'api::page.page',
        {
          fields: ['title', 'slug', 'opener'],
        }
      );

      // Sicherstellen, dass entries ein Array ist
      const entriesArray = Array.isArray(entries) ? entries : [entries];

      if (!entriesArray || entriesArray.length === 0) {
        ctx.body = [];
        return;
      }

      const randomEntries = [...entriesArray].sort(() => 0.5 - Math.random());

      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
  })
);
