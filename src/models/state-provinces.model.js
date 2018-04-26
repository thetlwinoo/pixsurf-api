// stateProvinces-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const stateProvinces = new Schema({
    stateProvinceCode: {
      type: String,
      required: true
    },
    stateProvinceName: {
      type: String,
      required: true
    },
    countryID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    salesTerritory: {
      type: String,
      required: true
    },
    border: {
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

  return mongooseClient.model('stateProvinces', stateProvinces);
};
