// Initializes the `keywords` service on path `/keywords`
const createService = require('./keywords.class.js');
const hooks = require('./keywords.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/keywords', createService(app,options));

  // Get our initialized service so that we can register hooks
  const service = app.service('keywords');

  service.hooks(hooks);
};
