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

    if (params.query && params.query.image) {
      const stockItemList = method === 'find' ? result.data : [result];

      console.log(stockItemList);

      const _IsSpecific = params.query.isBaseImage && params.query.isSmallImage && params.query.isThumbnail;
      
      await Promise.all(stockItemList.map(async stockItem => {
        const images = [];

        console.log(stockItem, _IsSpecific)

        if (_IsSpecific) {          
          images = await app.service('general/images').find({
            stockItemId: stockItem._id,
            isBaseImage: params.query.isBaseImage,
            isSmallImage: params.query.isSmallImage,
            isThumbnail: params.query.isThumbnail
          });
        } else {
          images = await app.service('general/images').find({
            stockItemId: stockItem._id
          });
        }

        console.log(images);

        stockItem.images = images ? images : [];
      }));
    }
    return context;
  };
};
