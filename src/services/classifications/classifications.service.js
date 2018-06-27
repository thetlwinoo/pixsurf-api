// Initializes the `classifications` service on path `/general/classifications`
const createService = require('feathers-mongoose');
const createModel = require('../../models/classifications.model');
const hooks = require('./classifications.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/classifications', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('general/classifications');

  service.hooks(hooks);
};
