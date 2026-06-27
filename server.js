'use strict';

const { createStrapi, compileStrapi } = require('@strapi/strapi');

compileStrapi().then(() => {
  const app = createStrapi();
  return app.start();
}).catch((error) => {
  console.error(error);
  process.exit(1);
});