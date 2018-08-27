// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const orders = new Schema({
    customer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    salesPerson: {
      type: Schema.Types.ObjectId,
      required: false
    },
    pickedByPerson: {
      type: Schema.Types.ObjectId
    },
    contactPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    backOrder: {
      type: Schema.Types.ObjectId
    },
    accountNumber: {
      type: String
    },
    orderDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    expectedDeliveryDate: {
      type: Date,
      required: false
    },
    customerPurchaseOrderNumber: {
      type: String
    },
    isUnderSupplyBackOrdered: {
      type: Boolean,
      required: true
    },
    comments: {
      type: String
    },
    deliveryInstructions: {
      type: String
    },
    pickingCompletedOn: {
      type: Date
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('orders', orders);
};
