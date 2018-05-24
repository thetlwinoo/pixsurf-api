// Initializes the `invoices` service on path `/sales/invoices`
const createService = require('feathers-mongoose');
const createModel = require('../../models/invoices.model');
const hooks = require('./invoices.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/invoices', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/invoices');

  service.hooks(hooks);
};
