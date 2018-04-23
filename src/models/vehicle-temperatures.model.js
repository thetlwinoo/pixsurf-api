// vehicleTemperatures-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const vehicleTemperatures = new Schema({
    vehicleRegistration: {
      type: String,
      required: true
    },
    chillerSensorNumber: {
      type: String,
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
    fullSensorData: {
      type: String
    },
    isCompressed: {
      type: Boolean,
      required: true
    },
    compressedSensorData: {
      type: String
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('vehicleTemperatures', vehicleTemperatures);
};
