const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const toFile = require('data-uri-to-file');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [authenticate('jwt')],
    create: [authenticate('jwt'), function (hook) {
      if (hook.params.file) {
        hook.data.file = hook.params.file;
      } else if (hook.data.uri) {
        toFile(hook.data.uri).then(file => {
          hook.data.file = {
            fieldname: 'file',
            originalname: hook.data.name,
            encoding: file.encoding,
            mimeType: file.mimeType,
            buffer: file.data,
            size: hook.data.size
          }
        });
      }
    }],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
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
