// Initializes the `subcategories` service on path `/general/subcategories`
const createService = require('feathers-mongoose');
const createModel = require('../../models/subcategories.model');
const hooks = require('./subcategories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/subcategories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('general/subcategories');

  service.hooks(hooks);
};
