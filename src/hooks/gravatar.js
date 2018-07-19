// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const url = '';
const query = '';

module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params
    } = context;

    const stockItemList = method === 'find' ? result.data : [result];

    await Promise.all(stockItemList.map(async stockItem => {

      const images = await app.service('general/images').find({
        query: {
          'stockItemId': stockItem._id,
          isThumbnail: true
        }
      });

      if (images) {
        stockItem.gravatar = images.length > 0 ? images[0].url : '';
      }
    }));

    return context;
  };
};
