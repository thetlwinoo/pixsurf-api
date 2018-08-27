module.exports = function (options = {}) {
  return async context => {

    const user = context.params.user;
    context.data = {
      "customer": user._id,
      "contactPerson": user._id,
      "lastEditedBy": user._id,      
      "cartString": JSON.stringify(context.data.cart),
      "cart": context.data.cart
    };

    return context;
  };
};
