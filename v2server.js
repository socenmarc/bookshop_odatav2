// load modules
const express = require('express')
const cds = require('@sap/cds')
const proxy = require('@sap/cds-odata-v2-adapter-proxy')
const csn = 'srv/gen/csn.json'

// config
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4004;

(async () => {
  // create new app
  const app = express();
  app.use('/app', express.static('app/webapp/'))

  app.get('/', function(req, res) {
    res.redirect('/app/index.html')
  })

  await cds.connect('db') // ensure database is connected!
  // serve odata v4
  await cds
    .serve('CatalogService')
    .from(csn)
    .with('srv/cat-service.js')
    .in(app)

  await cds
    .serve('Stats')
    .from(csn)
    .with('srv/cat-service.js')
    .in(app)

  // serve odata v2
  process.env.XS_APP_LOG_LEVEL = 'none'; // suppress debug logs
  app.use(proxy({
    // app
    path: 'v2',
    model: csn,
    // target
    port: port
  }))

  // start server
  const server = app.listen(port, host, () => console.info(`app is listing at ${port}`));
  server.on('error', error => console.error(error.stack));
})()



/* "use strict";

const cds = require("@sap/cds");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");

cds.on("bootstrap", app => app.use(proxy()));

module.exports = cds.server; */
