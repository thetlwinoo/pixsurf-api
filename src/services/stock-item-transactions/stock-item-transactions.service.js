// Initializes the `stockItemTransactions` service on path `/warehouse/stock-item-transactions`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stock-item-transactions.model');
const hooks = require('./stock-item-transactions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'stock-item-transactions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/stock-item-transactions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/stock-item-transactions');

  service.hooks(hooks);
};
