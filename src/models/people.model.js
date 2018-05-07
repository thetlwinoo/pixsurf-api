// people-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const people = new Schema({
    fullName: {
      type: String,
      required: true
    },
    preferredName: {
      type: String,
      required: true
    },
    searchName: {
      type: String,
      required: true
    },
    isPermittedToLogon: {
      type: Boolean,
      required: true
    },
    logonName: {
      type: String
    },
    isExternalLogonProvider: {
      type: Boolean,
      required: true
    },
    isSystemUser: {
      type: Boolean,
      required: true
    },
    isEmployee: {
      type: Boolean,
      required: true
    },
    isSalesperson: {
      type: Boolean,
      required: true
    },
    userPreferences: {
      type: Object
    },
    phoneNumber: {
      type: String
    },
    faxNumber: {
      type: String
    },
    emailAddress: {
      type: String
    },
    photo: {
      type: String
    },
    customFields: {
      type: Object
    },
    otherLanguages: [String],
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

  return mongooseClient.model('people', people);
};
