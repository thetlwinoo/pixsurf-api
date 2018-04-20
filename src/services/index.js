const users = require('./users/users.service.js');
const warehouseColors = require('./warehouse-colors/warehouse-colors.service.js');
const warehousePackagetypes = require('./warehouse-packagetypes/warehouse-packagetypes.service.js');
const warehouseStockGroups = require('./warehouse-stock-groups/warehouse-stock-groups.service.js');
const warehousePackageTypes = require('./warehouse-package-types/warehouse-package-types.service.js');
const warehouseStockItems = require('./warehouse-stock-items/warehouse-stock-items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(warehouseColors);
  app.configure(warehousePackagetypes);
  app.configure(warehouseStockGroups);
  app.configure(warehousePackageTypes);
  app.configure(warehouseStockItems);
};
