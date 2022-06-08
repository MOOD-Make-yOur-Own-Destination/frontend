'use strict';

/**
 * sookso service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sookso.sookso');
