'use strict';

/**
 * game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) => {
  return {
    async find(ctx) {
      ctx.body = await strapi.documents("api::game.game").findMany({
        populate: "deep",
      });
    }
  };
});
