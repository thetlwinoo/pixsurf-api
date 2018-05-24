// invoiceLines-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const invoiceLines = new Schema({
    invoice: {
      type: Schema.Types.ObjectId,
      required: true
    },
    stockItem: {
      type: Schema.Types.ObjectId,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    packageType: {
      type: Schema.Types.ObjectId,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    unitPrice: {
      type: Number
    },
    taxRate: {
      type: Number,
      required: true
    },
    taxAmount: {
      type: Number,
      required: true
    },
    lineProfit: {
      type: Number,
      required: true
    },
    extendedPrice: {
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

  return mongooseClient.model('invoiceLines', invoiceLines);
};
