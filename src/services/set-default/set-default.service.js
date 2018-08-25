// Initializes the `setDefault` service on path `/addresses/set-default`
const createService = require('./set-default.class.js');
const hooks = require('./set-default.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/addresses/set-default', createService(app,options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('addresses/set-default');

  service.hooks(hooks);
};
