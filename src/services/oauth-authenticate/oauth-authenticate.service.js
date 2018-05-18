// Initializes the `oauthAuthenticate` service on path `/oauth-authenticate`
const createService = require('./oauth-authenticate.class.js');
const hooks = require('./oauth-authenticate.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/oauth-authenticate', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('oauth-authenticate');

  service.hooks(hooks);
};
