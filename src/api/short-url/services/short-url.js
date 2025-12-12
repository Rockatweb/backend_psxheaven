'use strict';

/**
 * short-url service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::short-url.short-url');
