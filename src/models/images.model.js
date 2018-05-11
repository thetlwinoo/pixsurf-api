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
    type: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    data: {
      type: Buffer,
      contentType: String
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
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('images', images);
};
