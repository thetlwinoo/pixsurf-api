// stockItemTransactions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const stockItemTransactions = new Schema({
    stockItemID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    transactionTypeID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    customerID: {
      type: Schema.Types.ObjectId
    },
    invoiceID: {
      type: Schema.Types.ObjectId
    },
    supplierID: {
      type: Schema.Types.ObjectId
    },
    purchaseOrderID: {
      type: Schema.Types.ObjectId
    },
    transactionOccurredWhen: {
      type: Date,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('stockItemTransactions', stockItemTransactions);
};
