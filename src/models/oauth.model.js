// oauth-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {
    Schema
  } = mongooseClient;
  const oauth = new Schema({
    client_id: {
      type: String,
      required: true
    },
    project_id: {
      type: String,
      required: true
    },
    auth_uri: {
      type: String,
      required: true
    },
    token_uri: {
      type: String,
      required: true
    },
    auth_provider_x509_cert_url: {
      type: String,
      required: true
    },
    client_secret: {
      type: String,
      required: true
    },
    redirect_uris: {
      type: [String],
      required: true
    },
    javascript_origins: {
      type: [String],
      required: true
    },
    code: {
      type: String,
      required: true
    },
    credentials: Object,
  }, {
    timestamps: true
  });

  return mongooseClient.model('oauth', oauth);
};
