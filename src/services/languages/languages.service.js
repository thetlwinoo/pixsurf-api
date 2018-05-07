// Initializes the `languages` service on path `/general/languages`
const createService = require('feathers-mongoose');
const createModel = require('../../models/languages.model');
const hooks = require('./languages.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'languages',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/languages', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/languages');

  service.hooks(hooks);
};
