// Initializes the `cities` service on path `/general/cities`
const createService = require('feathers-mongoose');
const createModel = require('../../models/cities.model');
const hooks = require('./cities.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cities',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/cities', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/cities');

  service.hooks(hooks);
};
