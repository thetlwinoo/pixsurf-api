const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const processUpload = require('../../hooks/process-upload');
const processAuthorize = require('../../hooks/process-authorization');
const processDriveUpload = require('../../hooks/process-drive-upload');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processUpload()],
    update: [],
    patch: [],
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
