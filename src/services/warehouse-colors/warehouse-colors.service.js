// Initializes the `warehouse.colors` service on path `/warehouse-colors`
const createService = require('feathers-mongoose');
const createModel = require('../../models/warehouse-colors.model');
const hooks = require('./warehouse-colors.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'warehouse-colors',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse-colors', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse-colors');

  service.hooks(hooks);
};
