// invoices-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const invoices = new Schema({
    customer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    billToCustomer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    order: {
      type: Schema.Types.ObjectId,
      required: true
    },
    deliveryMethod: {
      type: Schema.Types.ObjectId,
      required: true
    },
    constactPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    accountPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    salesPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    packedByPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    invoiceDate: {
      type: Date,
      required: true
    },
    customerPurchaseOrderNumber: {
      type: String,
      required: true
    },
    isCreditNote: {
      type: Boolean,
      required: true
    },
    creditNoteReason: {
      type: String
    },
    comments: {
      type: String
    },
    deliveryInstructions: {
      type: String
    },
    internalComments: {
      type: String
    },
    totalDryItems: {
      type: Number,
      required: true
    },
    totalChillerItems: {
      type: Number,
      required: true
    },
    deliveryRun: {
      type: String
    },
    runPosition: {
      type: String
    },
    returnedDeliveryData: {
      type: String
    },
    confirmedDeliveryTime: {
      type: Date
    },
    confirmedReceivedBy: {
      type: String
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('invoices', invoices);
};
