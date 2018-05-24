// Initializes the `orderLines` service on path `/sales/order-lines`
const createService = require('feathers-mongoose');
const createModel = require('../../models/order-lines.model');
const hooks = require('./order-lines.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/order-lines', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/order-lines');

  service.hooks(hooks);
};
