// Initializes the `customers` service on path `/sales/customers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/customers.model');
const hooks = require('./customers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/customers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sales/customers');

  service.hooks(hooks);
};
