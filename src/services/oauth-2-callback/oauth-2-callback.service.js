// Initializes the `oauth2callback` service on path `/oauth2callback`
const createService = require('./oauth-2-callback.class.js');
const hooks = require('./oauth-2-callback.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/oauth2callback', createService(options),
  function (req, res, next) {
        
    next();
  }
);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('oauth2callback');

  service.hooks(hooks);
};
