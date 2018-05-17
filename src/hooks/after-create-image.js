// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    // const {
    //   app,
    //   method,
    //   result,
    //   data,
    //   params
    // } = context;
    // if (!context) throw new Error('Create Image Failed!');
    // if (context.data.error) throw new Error(context.data.error);
    return context;
  };
};
