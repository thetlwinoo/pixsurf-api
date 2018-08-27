module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params
    } = context;
    
    if (result) {
      const cart = context.data.cart;

      await Promise.all(cart.items.map(async item => {
        const orderLine = {
          order: result._id,
          stockItem: item.id,
          quantity: item.quantity,
          unitPrice: item.price,
          pickedQuantity: item.quantity,
          lastEditedBy: result.lastEditedBy
        };
        const ret = await app.service('sales/order-lines').create(orderLine);
      }));
    }


    return context;
  };
};
