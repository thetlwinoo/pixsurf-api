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
          context.data = {
            "customer": user._id,
            "contactPerson": user._id,
            "lastEditedBy": user._id,
            // "cartString": JSON.stringify(context.data.cart),
            "cart": context.data.cart
          };
        }
      }
    }


    return context;
  };
};
