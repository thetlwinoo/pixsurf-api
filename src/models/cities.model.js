// cities-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const cities = new Schema({
    cityName: {
      type: String,
      required: true
    },
    stateProvinceID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    location: {
      type: String
    },
    latestRecordedPopulation: {
      type: String
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

  return mongooseClient.model('cities', cities);
};
