// countries-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const countries = new Schema({
    countryName: {
      type: String,
      required: true
    },
    formalName: {
      type: String,
      required: true
    },
    isoAlpha3Code: {
      type: String
    },
    isoNumericCode: {
      type: Number
    },
    countryType: {
      type: String
    },
    latestRecordedPopulation: {
      type: Number
    },
    continent: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    },
    subregion: {
      type: String,
      required: true
    },
    border: {
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

  return mongooseClient.model('countries', countries);
};
