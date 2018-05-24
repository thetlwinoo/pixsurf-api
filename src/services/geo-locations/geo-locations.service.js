// Initializes the `geoLocations` service on path `/general/geo-locations`
const createService = require('feathers-mongoose');
const createModel = require('../../models/geo-locations.model');
const hooks = require('./geo-locations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/geo-locations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('general/geo-locations');

  service.hooks(hooks);
};
