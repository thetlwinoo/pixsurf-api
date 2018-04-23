const users = require('./users/users.service.js');
const colors = require('./colors/colors.service.js');
const packageTypes = require('./package-types/package-types.service.js');
const stockGroups = require('./stock-groups/stock-groups.service.js');
const stockItems = require('./stock-items/stock-items.service.js');
const stockItemTransactions = require('./stock-item-transactions/stock-item-transactions.service.js');
const coldRoomTemperatures = require('./cold-room-temperatures/cold-room-temperatures.service.js');
const vehicleTemperatures = require('./vehicle-temperatures/vehicle-temperatures.service.js');
const stockItemHoldings = require('./stock-item-holdings/stock-item-holdings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(colors);
  app.configure(packageTypes);
  app.configure(stockGroups);
  app.configure(stockItems);
  app.configure(stockItemTransactions);
  app.configure(coldRoomTemperatures);
  app.configure(vehicleTemperatures);
  app.configure(stockItemHoldings);
};
