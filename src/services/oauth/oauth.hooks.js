const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const afterFindOauth = require('../../hooks/after-find-oauth');
const beforeCreateOauth = require('../../hooks/before-create-oauth');
const googleAuth = require('../../hooks/google-auth');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [beforeCreateOauth()],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [afterFindOauth()],
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
