// Initializes the `packageTypes` service on path `/warehouse/package-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/package-types.model');
const hooks = require('./package-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'package-types',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/package-types', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/package-types');

  service.hooks(hooks);
};
