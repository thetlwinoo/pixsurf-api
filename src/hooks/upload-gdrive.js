// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
const fs = require('fs');
const {
  oauthclient
} = require('../services/g-drives');
const atob = require('atob');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    const config = app.get('client_secret');
    const keys = config.web;

    const client = new google.auth.OAuth2(
      keys.client_id,
      keys.client_secret,
      keys.redirect_uris[0]
    );

    if (context.data.authenticate) {
      client.setCredentials(context.data.credentials);
      const createAuth = await createFiles(client, context.data)
      context.data.fileId = createAuth.fileId;
      console.log('createAuth', createAuth)
    }
    return context;
  };
};

async function createFiles(auth, data) {
  // console.log('auth', auth)
  return new Promise((resolve, reject) => {
    const drive = google.drive({
      version: 'v3',
      auth
    });

    var fileMetadata = {
      'name': data.name
    };

    var media = {
      mimeType: data.type,
      body: fs.createReadStream(data.tempPath)
      // body:  data.uri
    };

    console.log(media.body)
    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, file) {
      if (err) {
        // Handle error
        console.log('error', err)
        reject(err)
      } else {
        resolve({
          fileId: file.data.id
        })
      }
    });
  });

}
