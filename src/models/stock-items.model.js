// stockItems-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const stockItems = new Schema({
    stockItemName: {
      type: String,
      required: true
    },
    supplierID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    colorID: {
      type: Schema.Types.ObjectId
    },
    unitPackageID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    outerPackageID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    brand: {
      type: String
    },
    size: {
      type: String
    },
    leadTimeDays: {
      type: Number,
      required: true
    },
    quantityPerOuter: {
      type: Number,
      required: true
    },
    isChillerStock: {
      type: Boolean,
      required: true
    },
    barcode: {
      type: String
    },
    taxRate: {
      type: Number,
      required: true
    },
    unitPrice: {
      type: Number,
      required: true
    },
    recommendedRetailPrice: {
      type: Number
    },
    typicalWeightPerUnit: {
      type: Number,
      required: true
    },
    marketingComments: {
      type: String
    },
    internalComments: {
      type: String
    },
    photo: {
      type: String
    },
    customFields: {
      type: String
    },
    tags: {
      type: String
    },
    searchDetails: {
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

  return mongooseClient.model('stockItems', stockItems);
};
