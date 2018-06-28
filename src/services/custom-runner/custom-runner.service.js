// Initializes the `customRunner` service on path `/custom-runner`
const createService = require('./custom-runner.class.js');
const hooks = require('./custom-runner.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/custom-runner', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('custom-runner');

  service.hooks(hooks);
};
