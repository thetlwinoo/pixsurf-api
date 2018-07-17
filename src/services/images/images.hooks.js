const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const processUpload = require('../../hooks/process-upload');
const deleteImage = require('../../hooks/delete-image');
const gravatar = require('../../hooks/gravatar');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [processUpload()],
    update: [],
    patch: [],
    remove: [deleteImage()]
  },

  after: {
    all: [],
    find: [gravatar()],
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
