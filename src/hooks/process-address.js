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
    
    if (params.user) {
      const response = await app.service('general/people').find({
        query: {
          emailAddress: params.user.email
        }
      });

      if (response.data.length > 0) {
        const user = response.data[0];

        if (user && context.data) {
          context.data.person = user._id;
          context.data.lastEditedBy = user._id;
        }
      }

    }

    console.log('Process Address=>', context.data)
    return context;
  };
};
