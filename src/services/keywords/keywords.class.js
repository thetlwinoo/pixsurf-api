/* eslint-disable no-unused-vars */
class Service {
  constructor(app, options) {
    this.app = app || {};
    this.options = options || {};
  }

  async find(params) {
    const query = params.query;
    const results = [];

    const stockitems = this.app.service('warehouse/stock-items');

    const keywords = await stockitems.find({
      query: {
        tags: {
          $search: query.key
        }
      }
    });

    if (keywords) {
      keywords.data.map(keyword => {
        keyword.tags.map(tag => results.push(tag));
      });

      const uniqueValues = [...new Set(results)];

      return uniqueValues;
    }
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
