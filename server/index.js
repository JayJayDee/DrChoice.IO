require('dotenv/config');
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');

const { initMySQLConnection } = require('./mysql');

const {
  presetRouter
} = require('./handlers');

const app = express();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

(async () => {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  // Init server-related dependencies
  await initMySQLConnection();

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);
  app.use(presetRouter());

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
})();
