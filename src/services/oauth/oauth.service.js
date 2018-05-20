// Initializes the `oauth` service on path `/oauth`
const createService = require('feathers-mongoose');
const createModel = require('../../models/oauth.model');
const hooks = require('./oauth.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/oauth', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('oauth');

  service.hooks(hooks);
};
