'use strict';

/**
 * short-url router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::short-url.short-url');
