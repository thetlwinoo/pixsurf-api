const { authenticate } = require('@feathersjs/authentication').hooks;
const processOrder = require('../../hooks/process-order');
const populateOrder = require('../../hooks/populate-order');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processOrder()],
    update: [processEditedBy()],
    patch: [processEditedBy()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [populateOrder()],
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
