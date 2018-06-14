// customers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const customers = new Schema({
    person: {
      type: Schema.Types.ObjectId,
      required: true
    },
    billToCustomer: {
      type: Schema.Types.ObjectId,
      required: true
    },
    customerCategory: {
      type: Schema.Types.ObjectId,
      required: true
    },
    buyingGroup: {
      type: Schema.Types.ObjectId,
      required: true
    },
    primaryContactPerson: {
      type: Schema.Types.ObjectId,
      required: true
    },
    alternateContactPerson: {
      type: Schema.Types.ObjectId
    },
    deliveryMethod: {
      type: Schema.Types.ObjectId,
      required: true
    },
    deliveryAddress: {
      type: Schema.Types.ObjectId,
      required: true
    },
    creditLimit: {
      type: Number
    },
    accountOpenedDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    standardDiscountPercentage: {
      type: Number,
      required: true
    },
    isStatementSent: {
      type: Boolean,
      required: true
    },
    isOnCreditHold: {
      type: Boolean,
      required: true
    },
    paymentDays: {
      type: Number,
      required: true
    },
    deliveryRun: {
      type: String
    },
    runPosition: {
      type: String
    },
    accountNumber: {
      type: String,
      required: true
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    },
    validFrom: {
      type: Date,
      required: true
    },
    validTo: {
      type: Date,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('customers', customers);
};
