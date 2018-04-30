const { authenticate } = require('@feathersjs/authentication').hooks;
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
    all: [],
    find: [
      populate({
        countryID: {
          service: 'general/countries',
          f_key: '_id',
          l_key: 'countryID',
          one: false,
          query: {
            $select: ['countryName']
          }
        },
        lastEditedBy: {
          service: 'general/people',
          f_key: '_id',
          l_key: 'lastEditedBy',
          one: false,
          query: {
            $select: ['fullName']
          }
        }
      })
    ],
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
