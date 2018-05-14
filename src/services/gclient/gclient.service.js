// Initializes the `gclient` service on path `/google/gclient`
const createService = require('./gclient.class.js');
const hooks = require('./gclient.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/google/gclient', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('google/gclient');

  service.hooks(hooks);
};
