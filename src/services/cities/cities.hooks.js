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
        stateProvinceID: {
          service: 'general/state-provinces',
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
