module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params
    } = context;

    const items = method === 'find' ? result.data : [result];

    await Promise.all(items.map(async item => {
      item.id = item._id;
    }));

    return context;
  };
};
