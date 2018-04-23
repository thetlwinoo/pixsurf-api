// stockItemHoldings-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const stockItemHoldings = new Schema({
    quantityOnHand: {
      type: Number,
      required: true
    },
    binLocation: {
      type: String,
      required: true
    },
    lastStocktakeQuantity: {
      type: Number,
      required: true
    },
    lastCostPrice: {
      type: Number,
      required: true
    },
    reorderLevel: {
      type: Number,
      required: true
    },
    targetStockLevel: {
      type: Number,
      required: true
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('stockItemHoldings', stockItemHoldings);
};
