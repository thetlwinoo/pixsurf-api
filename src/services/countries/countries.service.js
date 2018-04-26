// Initializes the `countries` service on path `/general/countries`
const createService = require('feathers-mongoose');
const createModel = require('../../models/countries.model');
const hooks = require('./countries.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'countries',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/countries', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/countries');

  service.hooks(hooks);
};
