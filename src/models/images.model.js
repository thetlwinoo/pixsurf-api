// images-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const images = new Schema({
    name: {
      type: String,
      required: true
    },
    stockItemId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    webkitRelativePath: {
      type: String
    },
    lastModified: {
      type: Date,
      default: Date.now()
    },
    sortOrder: {
      type: Number,
      default: 0
    },
    isBaseImage: {
      type: Boolean,
      default: false
    },
    isSmallImage: {
      type: Boolean,
      default: false
    },
    isThumbnail: {
      type: Boolean,
      default: false
    },
    exclude: {
      type: Boolean,
      default: false
    },
    media: {
      type: Schema.Types.ObjectId
    },
    fileName: {
      type: String,
      default: ''
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('images', images);
};
