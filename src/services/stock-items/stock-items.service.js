// Initializes the `stockItems` service on path `/warehouse/stock-items`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stock-items.model');
const hooks = require('./stock-items.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  // const paginate = app.get('paginate');
  const paginate = {
    default: 20,
    max: 300
  };
  

  const options = {
    name: 'stock-items',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/stock-items', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/stock-items');
  service.hooks(hooks);
};
