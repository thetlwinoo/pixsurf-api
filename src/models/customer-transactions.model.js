// customerTransactions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const customerTransactions = new Schema({
    customer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    transactionType: {
      type: Schema.Types.ObjectId,
      required: true
    },
    invoice: {
      type: Schema.Types.ObjectId
    },
    paymentMethod: {
      type: Schema.Types.ObjectId
    },
    transactionDate: {
      type: Date,
      required: true
    },
    amountExcludingTax: {
      type: Number,
      required: true
    },
    taxAmount: {
      type: Number,
      required: true
    },
    transactionAmount: {
      type: Number,
      required: true
    },
    outstandingBalance: {
      type: Number,
      required: true
    },
    finalizationDate: {
      type: Date
    },
    isFinalized: {
      type: Date
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('customerTransactions', customerTransactions);
};
