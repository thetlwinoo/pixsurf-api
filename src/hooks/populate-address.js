// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      data,
      result
    } = context;

    if (result) {
      const addresses = await app.service('general/addresses').find({
        query: {
          person: data.person
        }
      });

      const _result = result;

      context.result = {
        result: _result,
        updates: addresses
      }
    }
    return context;
  };
};
