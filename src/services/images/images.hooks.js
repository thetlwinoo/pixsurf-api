const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const processUpload = require('../../hooks/process-upload');
const processAuthorize = require('../../hooks/process-authorization');
const processDriveUpload = require('../../hooks/process-drive-upload');
const uploadGdrive = require('../../hooks/upload-gdrive');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processUpload(), uploadGdrive()],
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
