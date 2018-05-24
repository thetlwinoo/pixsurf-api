// Initializes the `customerTransactions` service on path `/sales/customer-transactions`
const createService = require('feathers-mongoose');
const createModel = require('../../models/customer-transactions.model');
const hooks = require('./customer-transactions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/customer-transactions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/customer-transactions');

  service.hooks(hooks);
};
