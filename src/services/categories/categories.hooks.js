const { authenticate } = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const errors = require("@feathersjs/errors");
const processEditedBy = require('../../hooks/process-editedby');

const errorHandler = ctx => {
  if (ctx.error) {
    const error = ctx.error;
    if (!error.code) {
      const newError = new errors.GeneralError("server error");
      ctx.error = newError;
      return ctx;
    }
    if (error.code === 404 || process.env.NODE_ENV === "production") {
      error.stack = null;
    }
    return ctx;
  }
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [authenticate('jwt'),processEditedBy()],
    update: [authenticate('jwt'),processEditedBy()],
    patch: [authenticate('jwt'),processEditedBy()],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      populate({
        children: {
          service: 'general/subcategories',
          f_key: '_id',
          one: false,
          query: {
            $select: ['title']
          }
        }
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [errorHandler],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
