// Initializes the `invoiceLines` service on path `/sales/invoice-lines`
const createService = require('feathers-mongoose');
const createModel = require('../../models/invoice-lines.model');
const hooks = require('./invoice-lines.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/invoice-lines', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/invoice-lines');

  service.hooks(hooks);
};
