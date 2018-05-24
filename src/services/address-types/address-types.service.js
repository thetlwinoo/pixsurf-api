// Initializes the `addressTypes` service on path `/general/address-types`
const createService = require('feathers-mongoose');
const createModel = require('../../models/address-types.model');
const hooks = require('./address-types.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/address-types', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('general/address-types');

  service.hooks(hooks);
};
