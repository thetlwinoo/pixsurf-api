// Initializes the `vehicleTemperatures` service on path `/warehouse/vehicle-temperatures`
const createService = require('feathers-mongoose');
const createModel = require('../../models/vehicle-temperatures.model');
const hooks = require('./vehicle-temperatures.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'vehicle-temperatures',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/vehicle-temperatures', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/vehicle-temperatures');

  service.hooks(hooks);
};
