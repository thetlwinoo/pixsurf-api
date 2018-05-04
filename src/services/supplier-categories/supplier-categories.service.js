// Initializes the `supplierCategories` service on path `/purchasing/supplier-categories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/supplier-categories.model');
const hooks = require('./supplier-categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'supplier-categories',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/purchasing/supplier-categories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('purchasing/supplier-categories');

  service.hooks(hooks);
};
