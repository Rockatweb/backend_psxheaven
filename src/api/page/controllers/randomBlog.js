"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => {
  const numberOfEntries = 1;
  return {
    async random(ctx) {
      const entries = await strapi.documents("api::page.page").findMany({
        fields: ["title", "slug", "opener"],
      });

      const randomEntries = [...entries].sort(() => 0.5 - Math.random());
      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
  };
});
