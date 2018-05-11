const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const {
  disallow,
  iff
} = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [disallow()],
    get: [disallow()],
    create: [
      function (hook) {
        if (!hook.data.uri && hook.params.file) {
          const file = hook.params.file;
          const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
          hook.data = {
            uri: uri
          };
        }
      }
    ],
    update: [
      disallow()
    ],
    patch: [
      disallow()
    ],
    remove: []
  },

  after: {
    all: [],
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
