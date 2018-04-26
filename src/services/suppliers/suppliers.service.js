// Initializes the `suppliers` service on path `/purchasing/suppliers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/suppliers.model');
const hooks = require('./suppliers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'suppliers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/purchasing/suppliers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('purchasing/suppliers');

  service.hooks(hooks);
};
