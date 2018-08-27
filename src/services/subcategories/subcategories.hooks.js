const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'),processEditedBy()],
    update: [authenticate('jwt'),processEditedBy()],
    patch: [authenticate('jwt'),processEditedBy()],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      populate({
        children: {
          service: 'general/classifications',
          f_key: '_id',
          one: false,
          query: {
            $select: ['title']
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
