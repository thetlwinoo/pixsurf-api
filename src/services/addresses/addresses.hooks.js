const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [populate({
      city: {
        service: 'general/cities',
        f_key: '_id',
        one: true,
        query: {
          $select: ['cityName']
        }
      },
      country: {
        service: 'general/countries',
        f_key: '_id',
        one: true,
        query: {
          $select: ['countryName']
        }
      },
      addressType: {
        service: 'general/address-types',
        f_key: '_id',
        one: true,
        query: {
          $select: ['addressTypeName']
        }
      },
      stateProvince: {
        service: 'general/state-provinces',
        f_key: '_id',
        one: true,
        query: {
          $select: ['stateProvinceName']
        }
      },
      lastEditedBy: {
        service: 'general/people',
        f_key: '_id',
        one: true,
        query: {
          $select: ['fullName','preferredName','searchName']
        }
      }
    })],
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
