const users = require('./users/users.service.js');
const colors = require('./colors/colors.service.js');
const packageTypes = require('./package-types/package-types.service.js');
const stockGroups = require('./stock-groups/stock-groups.service.js');
const stockItems = require('./stock-items/stock-items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(colors);
  app.configure(packageTypes);
  app.configure(stockGroups);
  app.configure(stockItems);
};
