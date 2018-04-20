// warehouse.stockItems-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const warehouseStockItems = new Schema({
    stockItemName: {
      type: String,
      required: true
    },
    supplierID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    colorID: {
      type: Schema.Types.ObjectId,
      required: true
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
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    leadTimeDays: {
      type: String,
      required: true
    },
    quantityPerOuter: {
      type: String,
      required: true
    },
    isChillerStock: {
      type: String,
      required: true
    },
    barcode: {
      type: String,
      required: true
    },
    taxRate: {
      type: String,
      required: true
    },
    unitPrice: {
      type: String,
      required: true
    },
    recommendedRetailPrice: {
      type: String,
      required: true
    },
    typicalWeightPerUnit: {
      type: String,
      required: true
    },
    marketingComments: {
      type: String,
      required: true
    },
    internalComments: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    customFields: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
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
      type: String,
      required: true
    },
    validTo: {
      type: String,
      required: true
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('warehouseStockItems', warehouseStockItems);
};
