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

    const stockitems = this.app.service('warehouse/stock-items');
    delete query.key;
    const _query = key.replace(/\s/g, "") == "" ? query : Object.assign(query, {
      $or: [{
          tags: {
            $search: key
          }
        },
        {
          searchDetails: {
            $search: key
          }
        },
        {
          stockItemName: {
            $search: key
          }
        }
      ]
    });

    const filters = await stockitems.find({
      query: _query
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
