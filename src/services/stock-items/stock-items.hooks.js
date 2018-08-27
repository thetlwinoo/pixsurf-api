const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const search = require('feathers-mongodb-fuzzy-search');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [
      populate.compatibility()
    ],
    find: [search(),search({
      fields: ['tags', 'searchDetails', 'stockItemName']
    })],
    get: [],
    create: [authenticate('jwt'),processEditedBy()],
    update: [authenticate('jwt'),processEditedBy()],
    patch: [authenticate('jwt'),processEditedBy()],
    remove: [authenticate('jwt'),]
  },

  after: {
    all: [
      populate({
        supplierID: {
          service: 'purchasing/suppliers',
          f_key: '_id',
          one: true,
          query: {
            $select: ['supplierName']
          }
        },
        colorID: {
          service: 'warehouse/colors',
          f_key: '_id',
          one: true,
          query: {
            $select: ['colorName']
          }
        },
        unitPackageID: {
          service: 'warehouse/package-types',
          f_key: '_id',
          one: true,
          query: {
            $select: ['packageTypeName']
          }
        },
        outerPackageID: {
          service: 'warehouse/package-types',
          f_key: '_id',
          one: true,
          query: {
            $select: ['packageTypeName']
          }
        },
        lastEditedBy: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
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
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
