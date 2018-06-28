// subcategories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const subcategories = new Schema({
    title: {
      type: String,
      required: true
    },
    slug: {
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
    status: {
      type: String,
      required: true,
      default: "A"
    },
    children: [{
      type: Object
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('subcategories', subcategories);
};
