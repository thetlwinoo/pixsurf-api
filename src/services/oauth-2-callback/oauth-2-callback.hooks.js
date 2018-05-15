const {
  authenticate
} = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],
    find: [
      function (hook) {
        // console.log('before',hook)
      }
    ],
    get: [
      function (hook) {
        console.log('before', hook)
      }
    ],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [
      function (hook) {
        if(hook.data){
          console.log(hook.data)
        }
      }
    ],
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
