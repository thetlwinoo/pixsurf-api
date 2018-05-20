const users = require('./users/users.service.js');
const colors = require('./colors/colors.service.js');
const packageTypes = require('./package-types/package-types.service.js');
const stockGroups = require('./stock-groups/stock-groups.service.js');
const stockItems = require('./stock-items/stock-items.service.js');
const stockItemTransactions = require('./stock-item-transactions/stock-item-transactions.service.js');
const coldRoomTemperatures = require('./cold-room-temperatures/cold-room-temperatures.service.js');
const vehicleTemperatures = require('./vehicle-temperatures/vehicle-temperatures.service.js');
const suppliers = require('./suppliers/suppliers.service.js');
const people = require('./people/people.service.js');
const cities = require('./cities/cities.service.js');
const countries = require('./countries/countries.service.js');
const deliveryMethods = require('./delivery-methods/delivery-methods.service.js');
const stateProvinces = require('./state-provinces/state-provinces.service.js');
const supplierCategories = require('./supplier-categories/supplier-categories.service.js');
const languages = require('./languages/languages.service.js');
const images = require('./images/images.service.js');
const uploads = require('./uploads/uploads.service.js');
const media = require('./media/media.service.js');
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
  app.configure(suppliers);
  app.configure(people);
  app.configure(cities);
  app.configure(countries);
  app.configure(deliveryMethods);
  app.configure(stateProvinces);
  app.configure(supplierCategories);
  app.configure(languages);
  app.configure(images);
  app.configure(uploads);
  app.configure(media);
};
