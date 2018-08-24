// addresses-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const addresses = new Schema({
    person: {
      type: Schema.Types.ObjectId,
      required: true
    },
    addressType: {
      type: Schema.Types.ObjectId,
      required: false
    },
    addressLine1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String
    },
    city: {
      type: Schema.Types.ObjectId,
      required: false
    },
    stateProvince: {
      type: Schema.Types.ObjectId,
      required: false
    },
    country: {
      type: Schema.Types.ObjectId,
      required: false
    },
    geoLocation: {
      type: String
    },
    postalCode: {
      type: String,
      required: false
    },
    lastEditedBy: {
      type: String,
      required: false
    },
    validFrom: {
      type: Date,
      required: true,
      default: Date.now()
    },
    validTo: {
      type: Date,
      required: true,
      default: Date.now()
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('addresses', addresses);
};
