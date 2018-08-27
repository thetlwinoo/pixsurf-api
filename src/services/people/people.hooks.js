const { authenticate } = require('@feathersjs/authentication').hooks;
const processEditedBy = require('../../hooks/process-editedby');
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processEditedBy()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      // populate({        
      //   lastEditedBy: {
      //     service: 'general/people',
      //     f_key: '_id',
      //     one: true,
      //     query: {
      //       $select: ['fullName','preferredName','searchName']
      //     }
      //   }
      // })
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
