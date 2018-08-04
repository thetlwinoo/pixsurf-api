const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [      
      populate.compatibility()      
    ],
    find: [],
    get: [],
    create: [authenticate('jwt'),],
    update: [authenticate('jwt'),],
    patch: [authenticate('jwt'),],
    remove: [authenticate('jwt'),]
  },

  after: {
    all: [
      populate({
        supplierID: {
          service: 'purchasing/suppliers',
          f_key: '_id',
          one: true,
          query:  {
            $select: ['supplierName']
          }
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
