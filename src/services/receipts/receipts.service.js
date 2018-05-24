// Initializes the `receipts` service on path `/sales/receipts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/receipts.model');
const hooks = require('./receipts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/receipts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/receipts');

  service.hooks(hooks);
};
