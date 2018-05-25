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
    addressType: {
      type: Schema.Types.ObjectId,
      required: true
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
      required: true
    },
    stateProvince: {
      type: Schema.Types.ObjectId,
      required: true
    },
    country: {
      type: Schema.Types.ObjectId,
      required: true
    },
    geoLocation: {
      type: String
    },
    postalCode: {
      type: String,
      required: true
    },
    lastEditedBy: {
      type: String,
      required: true
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
