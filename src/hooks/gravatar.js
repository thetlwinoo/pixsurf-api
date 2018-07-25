// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params,
      data
    } = context;
    
    if (result.data.url && data.isThumbnail) {
      console.log(data)
      const ret = await app.service('warehouse/stock-items').patch(result.stockItemId, {
        gravatar: `${result.data.url}`
      });
    }

    return context;
  };
};
