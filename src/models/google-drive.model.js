// googleDrive-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const googleDrive = new Schema({
    text: { type: String}
  }, {
    timestamps: true
  });

  return mongooseClient.model('googleDrive', googleDrive);
};
