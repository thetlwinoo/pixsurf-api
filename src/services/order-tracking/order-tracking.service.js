// Initializes the `orderTracking` service on path `/sales/order-tracking`
const createService = require('feathers-mongoose');
const createModel = require('../../models/order-tracking.model');
const hooks = require('./order-tracking.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/order-tracking', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/order-tracking');

  service.hooks(hooks);
};
