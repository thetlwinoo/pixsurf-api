// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  '254051480224-1rikk2jbbm3rddjqk2gfsiat14sf6upb.apps.googleusercontent.com',
  '2sTraeDXWMDVp3ChGe346Nfh',
  ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
);

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    if (!data.uri) {
      throw new Error('A image must have a uri');
    }

    const uri = data.uri;

    var fileMetadata = {
      'name': data.name
    };
    var media = {
      mimeType: data.type,
      body: data.uri
    };

    main(fileMetadata, media).catch(console.error);

    return context;
  };
};

async function main(fileMetadata, media) {
  // console.log(drive)
  drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  }, function (err, file) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('File Id: ', file.id);
    }
  });
}

// 