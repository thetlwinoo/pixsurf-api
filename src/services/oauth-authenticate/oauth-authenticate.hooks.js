const { authenticate } = require('@feathersjs/authentication').hooks;
const googleAuth = require('../../hooks/google-auth');
const oAuthAuthenticate = require('../../hooks/oauth-authenticate');
const oAuthPopulate = require('../../hooks/oauth-populate');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [oAuthAuthenticate()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [oAuthPopulate()],
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
