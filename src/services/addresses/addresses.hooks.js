const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
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
      },
      country: {
        service: 'general/countries',
        f_key: '_id',
        one: true,
      },
      addressType: {
        service: 'general/address-types',
        f_key: '_id',
        one: true,
      },
      stateProvince: {
        service: 'general/state-provinces',
        f_key: '_id',
        one: true,
      },
      lastEditedBy: {
        service: 'general/people',
        f_key: '_id',
        one: true,
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
