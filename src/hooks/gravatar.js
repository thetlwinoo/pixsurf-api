// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params
    } = context;

    if (result.data.url) {
      const ret = await app.service('warehouse/stock-items').update(result.stockItemId, {
        gravatar: `${result.data.url}`
      });
      console.log(ret)
    }


    // await Promise.all(stockItemList.map(async stockItem => {

    //   const photos = await app.service('general/photos').find({
    //     query: {
    //       'stockItemId': stockItem._id,
    //       'isThumbnail': true
    //     }
    //   });

    //   if (photos.data) {
    //     console.log('populate');
    //     stockItem.gravatar = photos.data.length > 0 ? `${photos.data[0].url}`: '';
    //   }
    // }));

    return context;
  };
};
