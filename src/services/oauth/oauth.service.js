// Initializes the `oauth` service on path `/oauth`
const createService = require('./oauth.class.js');
const hooks = require('./oauth.hooks');
const gdrive = require('../g-drives');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/oauth', gdrive);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('oauth');

  service.hooks(hooks);
};
