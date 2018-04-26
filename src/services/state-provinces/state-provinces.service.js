// Initializes the `stateProvinces` service on path `/general/state-provinces`
const createService = require('feathers-mongoose');
const createModel = require('../../models/state-provinces.model');
const hooks = require('./state-provinces.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'state-provinces',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/state-provinces', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/state-provinces');

  service.hooks(hooks);
};
