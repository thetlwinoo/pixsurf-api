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
<<<<<<< HEAD
    media: {
      type: Schema.Types.ObjectId
=======
    fileId: {
      type: String,
      default: ''
>>>>>>> d24a0e18ba75c53aa7a156ee7144c7a3b229237f
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('images', images);
};
