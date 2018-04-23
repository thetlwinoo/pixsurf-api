// Initializes the `stockItemHoldings` service on path `/warehouse/stock-item-holdings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stock-item-holdings.model');
const hooks = require('./stock-item-holdings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'stock-item-holdings',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/stock-item-holdings', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/stock-item-holdings');

  service.hooks(hooks);
};
