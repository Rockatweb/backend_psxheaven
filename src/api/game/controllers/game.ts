/**
 *  category controller
 */

import { factories } from '@strapi/strapi';

module.exports = factories.createCoreController('api::game.game', ({ strapi }) => {
  return {
    async find(ctx) {
      ctx.body = await strapi.documents("api::game.game").findMany({
        populate: "deep",
      });
    }
  };
});
