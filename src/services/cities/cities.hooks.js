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
          f_key: 'id',
          l_key: 'stateProvinceID',
          one: true,
          query: {
            $select: ['stateProvinceName']
          }
        },
         lastEditedBy: {
           service: 'general/people',
           f_key: '_id',
           l_key: 'lastEditedBy',
           one: true,
           query:  {
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
