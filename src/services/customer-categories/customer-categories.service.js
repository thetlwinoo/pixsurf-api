// Initializes the `customerCategories` service on path `/sales/customer-categories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/customer-categories.model');
const hooks = require('./customer-categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/customer-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/customer-categories');

  service.hooks(hooks);
};
