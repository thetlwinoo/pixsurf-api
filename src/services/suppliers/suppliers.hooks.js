const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      populate.compatibility()
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
        supplierCategoryID: {
          service: 'purchasing/supplier-categories',
          f_key: '_id',
          one: true
        },
        primaryContactPersonID: {
          service: 'general/people',
          f_key: '_id',
          one: true
        },
        alternateContactPersonID: {
          service: 'general/people',
          f_key: '_id',
          one: true
        },
        deliveryMethodID: {
          service: 'general/delivery-methods',
          f_key: '_id',
          one: true
        },
        deliveryCityID: {
          service: 'general/cities',
          f_key: '_id',
          one: true
        },
        postalCityID: {
          service: 'general/cities',
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
