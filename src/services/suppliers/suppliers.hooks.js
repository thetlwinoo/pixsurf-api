const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');
const processEditedBy = require('../../hooks/process-editedby');

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      populate.compatibility()
    ],
    find: [],
    get: [],
    create: [processEditedBy()],
    update: [processEditedBy()],
    patch: [processEditedBy()],
    remove: []
  },

  after: {
    all: [
      populate({
        supplierCategoryID: {
          service: 'purchasing/supplier-categories',
          f_key: '_id',
          one: true,
          query: {
            $select: ['supplierCategoryName']
          }
        },
        primaryContactPersonID: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        alternateContactPersonID: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        deliveryMethodID: {
          service: 'general/delivery-methods',
          f_key: '_id',
          one: true,
          query: {
            $select: ['deliveryMethodName']
          }
        },
        deliveryCityID: {
          service: 'general/cities',
          f_key: '_id',
          one: true,
          query: {
            $select: ['cityName']
          }
        },
        postalCityID: {
          service: 'general/cities',
          f_key: '_id',
          one: true,
          query: {
            $select: ['cityName']
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
