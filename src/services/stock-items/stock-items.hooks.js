const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const populateStockItem = require('../../hooks/populate-stock-item');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      populate.compatibility(),
      populateStockItem()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      populate({
        supplierID: {
          service: 'purchasing/suppliers',
          f_key: '_id',
          one: true
        },
        colorID: {
          service: 'warehouse/colors',
          f_key: '_id',
          one: true
        },
        unitPackageID: {
          service: 'warehouse/package-types',
          f_key: '_id',
          one: true
        },
        outerPackageID: {
          service: 'warehouse/package-types',
          f_key: '_id',
          one: true
        },
        lastEditedBy: {
          service: 'general/people',
          f_key: '_id',
          one: true,
        }
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
