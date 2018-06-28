// classifications-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const classifications = new Schema({
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    translate: {
      type: String,
      required: true
    },
    data: {
      type: Object
    },
    hidden: {
      type: String,
      default: false
    },
    url: {
      type: String
    },
    exactMatch: {
      type: Boolean,
      default: false
    },
    externalUrl: {
      type: Boolean,
      default: false
    },
    openInNewTab: {
      type: Boolean,
      default: false
    },
    children: [{
      type: Object
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('classifications', classifications);
};
