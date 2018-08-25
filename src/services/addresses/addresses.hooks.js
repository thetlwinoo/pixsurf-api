const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const resetDefault = require('../../hooks/reset-default-addresses');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [resetDefault()],
    update: [],
    patch: [resetDefault()],
    remove: []
  },

  after: {
    all: [populate({
      person: {
        service: 'general/people',
        f_key: '_id',
        one: true,
        query: {
          $select: ['fullName','phoneNumber','emailAddress']
        }
      },
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
