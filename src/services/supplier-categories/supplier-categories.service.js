// Initializes the `supplierCategories` service on path `/general/supplier-categories`
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
  app.use('/general/supplier-categories', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/supplier-categories');

  service.hooks(hooks);
};
