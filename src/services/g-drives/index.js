const hooks = require('./hooks');
const service = require('./service');
// const download = require('./download');
// const exportpdf = require('./export-pdf');
// const list = require('./export-pdf');
const oauthclient = require('./oauth-client');
// const oauthclient = require('./oauth-client2');
// const quickstart = require('./quickstart');

Object.assign(service, { hooks, service, oauthclient });

module.exports = service;
