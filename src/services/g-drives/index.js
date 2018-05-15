const hooks = require('./hooks');
const service = require('./service');
const download = require('./download');
const exportpdf = require('./export-pdf');
const list = require('./export-pdf');
const oauthclient = require('./oauth-client');
const quickstart = require('./quickstart');

Object.assign(service, { hooks, service, download, exportpdf, list, oauthclient, quickstart });

module.exports = service;
