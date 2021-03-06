const { authenticate } = require('@feathersjs/authentication').hooks;
const gravatar = require('../../hooks/gravatar');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [authenticate('jwt'),processEditedBy()],
    update: [authenticate('jwt'),processEditedBy()],
    patch: [authenticate('jwt'),processEditedBy()],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [gravatar()],
    patch: [gravatar()],
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
