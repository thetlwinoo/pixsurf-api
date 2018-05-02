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
        stateProvince: {
          service: 'general/state-provinces',
          f_key: '_id',
          l_key: 'stateProvinceID',
          one: true,
          query:  {
            $select: ['stateProvinceName']
          }          
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
