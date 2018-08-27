const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
// const { shallowPopulate } = require('feathers-shallow-populate');
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
        stateProvinceID: {
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
