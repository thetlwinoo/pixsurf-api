const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [ 
      authenticate('jwt'),
      populate.compatibility()
    ],
    find: [],
    get: [],
    create: [processEditedBy()],
    update: [processEditedBy()],
    patch: [processEditedBy()],
    remove: []
  },

  after: {
    all: [
      populate({
        lastEditedBy: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
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
