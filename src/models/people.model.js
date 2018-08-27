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
      type: Date,
      required: true,
      default: new Date('2018-01-01 00:00:00.0000000')
    },
    validTo: {
      type: Date,
      required: true,
      default: new Date('9999-12-31 23:59:59.9999999')
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('people', people);
};
