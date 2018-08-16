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

    const _limit = query.$limit ? parseInt(query.$limit, 10) : 20;
    const _skip = query.$skip ? parseInt(query.$skip, 10) : 0;

    const stockitems = this.app.service('warehouse/stock-items');
    
    const filters = key.replace(/\s/g, "") == "" ? await stockitems.find({
      query: {
        $limit: _limit,
        $skip: _skip
      }

    }) : await stockitems.find({
      query: {
        $limit: _limit,
        $skip: _skip,
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
