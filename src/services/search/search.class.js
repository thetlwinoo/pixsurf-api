var _ = require('lodash');

/* eslint-disable no-unused-vars */
class Service {
  constructor(app, options) {
    this.app = app || {};
    this.options = options || {};
  }

  async find(params) {
    const results = [];
    const query = params.query;
    var key = "";

    if (_.isEmpty(query)) {
      key = "";
    }

    key = query.key ? query.key : "";

    console.log(query)
    const stockitems = this.app.service('warehouse/stock-items');
    const filters = key.replace(/\s/g, "") == "" ? await stockitems.find() : await stockitems.find({
      query: {
        $limit: query.$limit,
        $skip: query.$skip,
        $or: [{
            tags: {
              $search: query.key
            }
          },
          {
            searchDetails: {
              $search: query.key
            }
          },
          {
            stockItemName: {
              $search: query.key
            }
          }
        ]
      }
    });

    return filters;
  }

  async get(id, params) {
    return {
      id,
      text: `A new message with ID: ${id}!`
    };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {
      id
    };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
