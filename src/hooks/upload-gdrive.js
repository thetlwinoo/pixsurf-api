// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
const fs = require('fs');
const {
  oauthclient
} = require('../services/g-drives');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    // const scopes = ['https://www.googleapis.com/auth/drive.file'];
    return authenticate(data).then(v => {
      console.log('vvvvc',v)
      context.data = {
        name: data.name,
        type: data.type,
        size: data.size,
        width: data.width,
        height: data.height,
        stockItemId: data.stockItemId,
        isBaseImage: data.isBaseImage,
        isSmallImage: data.isSmallImage,
        isThumbnail: data.isThumbnail,
        exclude: data.exclude,
        fileId: v.fileId
      };

      return context;
    })
  };
};

async function authenticate(data) {  
  return new Promise((resolve, reject) => {
    oauthclient.authenticate()
      .then(auth => {
        createFiles(auth, data).then(v => resolve(v))
      })
      .catch(e => reject(e));
  });
}

async function createFiles(auth, data) {
  console.log('auth',auth)
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
    };

    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, file) {
      if (err) {
        // Handle error
        // console.log('errrrrrrrrrrrr',err)
        reject(err)
      } else {
        resolve({
          fileId: file.data.id
        })
      }
    });
  });

}
