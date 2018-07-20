// Initializes the `photos` service on path `/general/photos`
const createService = require('feathers-mongoose');
const createModel = require('../../models/photos.model');
const hooks = require('./photos.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/photos', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('general/photos');

  service.hooks(hooks);
};
