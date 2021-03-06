// Initializes the `stockGroups` service on path `/warehouse/stock-groups`
const createService = require('feathers-mongoose');
const createModel = require('../../models/stock-groups.model');
const hooks = require('./stock-groups.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'stock-groups',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/warehouse/stock-groups', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('warehouse/stock-groups');

  service.hooks(hooks);
};
