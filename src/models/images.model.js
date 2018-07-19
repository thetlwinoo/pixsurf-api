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
    stockItemId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    sortOrder: {
      type: Number,
      default: 0,
      required: true
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
    data: {
      type: Object
    },
    file: {
      type: Object
    },
    url: {
      type: String,
      default: ''
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('images', images);
};
