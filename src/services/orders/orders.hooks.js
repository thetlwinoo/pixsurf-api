const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const processOrder = require('../../hooks/process-order');
const processOrderLines = require('../../hooks/process-order-lines');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processOrder()],
    update: [processEditedBy()],
    patch: [processEditedBy()],
    remove: []
  },

  after: {
    all: [
      populate({
        customer: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName', 'preferredName', 'searchName']
          }
        },
        contactPerson: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName', 'preferredName', 'searchName']
          }
        },
        lastEditedBy: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName', 'preferredName', 'searchName']
          }
        },
      })
    ],
    find: [],
    get: [],
    create: [processOrderLines()],
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
