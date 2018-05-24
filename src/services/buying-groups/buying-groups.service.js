// Initializes the `buyingGroups` service on path `/sales/buying-groups`
const createService = require('feathers-mongoose');
const createModel = require('../../models/buying-groups.model');
const hooks = require('./buying-groups.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/sales/buying-groups', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('sales/buying-groups');

  service.hooks(hooks);
};
