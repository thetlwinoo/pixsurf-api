// orderLines-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const orderLines = new Schema({
    order: {
      type: Schema.Types.ObjectId,
      required: true
    },
    stockItem: {
      type: Schema.Types.ObjectId,
      required: true
    },
    description: {
      type: String
    },
    unitMeasure: {
      type: Schema.Types.ObjectId,
      required: false
    },
    quantity: {
      type: Number,
      required: true
    },
    unitPrice: {
      type: Number,
      required: true
    },
    currencyRate: {
      type: Schema.Types.ObjectId,
      required: false
    },
    taxRate: {
      type: Number,
      required: false,
      default: 0.0
    },
    pickedQuantity: {
      type: Number,
      required: true
    },
    pickingCompletedOn: {
      type: Date
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId,
      required: true
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('orderLines', orderLines);
};
