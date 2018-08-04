const {
  authenticate
} = require('@feathersjs/authentication').hooks;
const populate = require('feathers-populate-hook');

module.exports = {
  before: {
    all: [authenticate('jwt'), populate.compatibility()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [
      populate({
        person: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        billToCustomer: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        customerCategory: {
          service: 'sales/customer-categories',
          f_key: '_id',
          one: true,
          query: {
            $select: ['customerCategoryName']
          }          
        },
        buyingGroup: {
          service: 'sales/buying-groups',
          f_key: '_id',
          one: true,
          query: {
            $select: ['customerCategoryName']
          }
        },
        primaryContactPerson: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        alternateContactPerson: {
          service: 'general/people',
          f_key: '_id',
          one: true,
          query: {
            $select: ['fullName','preferredName','searchName']
          }
        },
        deliveryMethod: {
          service: 'general/delivery-methods',
          f_key: '_id',
          one: true,
          query: {
            $select: ['addressLine1','addressLine2']
          }
        },
        deliveryAddress: {
          service: 'general/addresses',
          f_key: '_id',
          one: true,
          query: {
            $select: ['addressLine1','addressLine2']
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
