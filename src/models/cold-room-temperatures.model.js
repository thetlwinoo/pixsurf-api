// coldRoomTemperatures-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const coldRoomTemperatures = new Schema({
    coldRoomSensorNumber: {
      type: Number,
      required: true
    },
    recordedWhen: {
      type: Date,
      required: true
    },
    temperature: {
      type: Number,
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

  return mongooseClient.model('coldRoomTemperatures', coldRoomTemperatures);
};
