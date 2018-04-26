// Initializes the `deliveryMethods` service on path `/general/delivery-methods`
const createService = require('feathers-mongoose');
const createModel = require('../../models/delivery-methods.model');
const hooks = require('./delivery-methods.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'delivery-methods',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/delivery-methods', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/delivery-methods');

  service.hooks(hooks);
};
