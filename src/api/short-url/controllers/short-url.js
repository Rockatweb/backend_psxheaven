'use strict';

/**
 * short-url controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::short-url.short-url');
