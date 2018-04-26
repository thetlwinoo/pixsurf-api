// suppliers-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const suppliers = new Schema({
    supplierName: {
      type: String,
      required: true
    },
    supplierCategoryID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    primaryContactPersonID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    alternateContactPersonID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    deliveryMethodID: {
      type: Schema.Types.ObjectId
    },
    deliveryCityID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    postalCityID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    supplierReference: {
      type: String
    },
    bankAccountName: {
      type: String
    },
    bankAccountBranch: {
      type: String
    },
    bankAccountCode: {
      type: String
    },
    bankAccountNumber: {
      type: String
    },
    bankInternationalCode: {
      type: String
    },
    paymentDays: {
      type: Number,
      required: true
    },
    internalComments: {
      type: String
    },
    phoneNumber: {
      type: String,
      required: true
    },
    faxNumber: {
      type: String,
      required: true
    },
    websiteURL: {
      type: String,
      required: true
    },
    deliveryAddressLine1: {
      type: String,
      required: true
    },
    deliveryAddressLine2: {
      type: String
    },
    deliveryPostalCode: {
      type: String,
      required: true
    },
    deliveryLocation: {
      type: String
    },
    postalAddressLine1: {
      type: String,
      required: true
    },
    postalAddressLine2: {
      type: String
    },
    postalPostalCode: {
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
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('suppliers', suppliers);
};
