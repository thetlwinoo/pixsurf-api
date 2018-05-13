// Initializes the `googleDrive` service on path `/google-drive`
const createService = require('feathers-mongoose');
const createModel = require('../../models/google-drive.model');
const hooks = require('./google-drive.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'google-drive',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/google-drive', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('google-drive');

  service.hooks(hooks);
};
