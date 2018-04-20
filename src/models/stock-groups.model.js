// stockGroups-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const stockGroups = new Schema({
    stockGroupName: {
      type: String,
      required: true
    },
    lastEditedBy: {
      type: Schema.Types.ObjectId
    },
    validFrom: {
      type: String
    },
    validTo: {
      type: String
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('stockGroups', stockGroups);
};
