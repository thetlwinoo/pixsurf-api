const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const processEditedBy = require('../../hooks/process-editedby');
const processAddress = require('../../hooks/process-address');
const resetDefault = require('../../hooks/reset-default-addresses');

module.exports = {
  before: {
    all: [processAddress()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    create: [],
    update: [],
    patch: [],
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
