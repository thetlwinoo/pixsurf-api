// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
const fs = require('fs');
const {
  oauthclient
} = require('../services/g-drives');
const drive = google.drive({
  version: 'v3',
  auth: oauthclient.oAuth2Client
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

    const fileName = data.tempPath;
    const scopes = ['https://www.googleapis.com/auth/drive.file'];
    oauthclient.authenticate(scopes)
      .then(c => {
        console.log('return',c)
        // uploadGdrive(fileName)
      })
      .catch(console.error);

    return context;
  };
};

async function uploadGdrive(fileName) {
  const fileSize = fs.statSync(fileName).size;
  const res = await drive.files.create({
    requestBody: {
      // a requestBody element is required if you want to use multipart
    },
    media: {
      body: fs.createReadStream(fileName)
    }
  }, {
    // Use the `onUploadProgress` event from Axios to track the
    // number of bytes uploaded to this point.
    onUploadProgress: evt => {
      const progress = (evt.bytesRead / fileSize) * 100;
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`${Math.round(progress)}% complete`);
    }
  });
  console.log(res.data);
  return res.data;
}
