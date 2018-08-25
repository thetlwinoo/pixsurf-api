module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      data,
      params
    } = context;

    if (data.default === true) {
      await app.service('general/addresses').patch(null, { default: false, person: data.person });
    }

    return context;
  };
};

