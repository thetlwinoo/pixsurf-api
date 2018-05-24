// Initializes the `addresses` service on path `/general/addresses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/addresses.model');
const hooks = require('./addresses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/addresses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/addresses');

  service.hooks(hooks);
};
