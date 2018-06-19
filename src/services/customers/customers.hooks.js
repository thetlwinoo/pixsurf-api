const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [authenticate('jwt'), populate.compatibility()],
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
        person: {
          service: 'general/people',
          f_key: '_id',
          one: true,
        },
        billToCustomer: {
          service: 'general/people',
          f_key: '_id',
          one: true,
        },
        customerCategory: {
          service: 'sales/customer-categories',
          f_key: '_id',
          one: true,
        },
        buyingGroup: {
          service: 'sales/buying-groups',
          f_key: '_id',
          one: true,
        },
        primaryContactPerson: {
          service: 'general/people',
          f_key: '_id',
          one: true,
        },
        alternateContactPerson: {
          service: 'general/people',
          f_key: '_id',
          one: true,
        },
        deliveryMethod: {
          service: 'general/delivery-methods',
          f_key: '_id',
          one: true,
        },
        deliveryAddress: {
          service: 'general/addresses',
          f_key: '_id',
          one: true,
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
