import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({
    async random(ctx) {
      const numberOfEntries = 1;

      // findMany gibt in Strapi 5 immer ein Array zurück, aber TS kennt es evtl. nicht
      const entries = await strapi.entityService.findMany(
        'api::page.page',
        {
          populate: [
            'image',
            'pageHeading',
            'seo',
            'socialMedia',
            'artist',
          ],
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
