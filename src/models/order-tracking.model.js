// orderTracking-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const orderTracking = new Schema({
    order: {
      type: Schema.Types.ObjectId,
      required: true
    },
    carrierTrackingNumber: {
      type: String,
      required: true
    },
    trackingEvent: {
      type: Schema.Types.ObjectId,
      required: true
    },
    eventDetails: {
      type: String,
      required: true
    },
    eventDateTime: {
      type: Date,
      required: true,
      default: Date.now()
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('orderTracking', orderTracking);
};
