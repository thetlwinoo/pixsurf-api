// receipts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const receipts = new Schema({
    receiptNo: {
      type: Number,
      required: true
    },
    order: {
      type: Schema.Types.ObjectId,
      required: true
    },
    invoice: {
      type: Schema.Types.ObjectId,
      required: true
    },
    issuedDate: {
      type: Date,
      required: true,
      default: Date.now()
    },
    printCount: {
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

  return mongooseClient.model('receipts', receipts);
};
