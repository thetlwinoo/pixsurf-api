// Initializes the `warehouse.stockItems` service on path `/warehouse-stock-items`
const createService = require('feathers-mongoose');
const createModel = require('../../models/warehouse-stock-items.model');
const hooks = require('./warehouse-stock-items.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'warehouse-stock-items',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse-stock-items', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse-stock-items');

  service.hooks(hooks);
};
