// Initializes the `coldRoomTemperatures` service on path `/warehouse/cold-room-temperatures`
const createService = require('feathers-mongoose');
const createModel = require('../../models/cold-room-temperatures.model');
const hooks = require('./cold-room-temperatures.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cold-room-temperatures',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/cold-room-temperatures', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/cold-room-temperatures');

  service.hooks(hooks);
};
