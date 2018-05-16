// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'credentials.json';
image = {};
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    image = data;
console.log(image)
    fs.readFile('client_secret.json', (err, content) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Drive API.
      authorize(JSON.parse(content), createFiles);
    });

    return context;
  };
};

function authorize(credentials, callback) {
  const {
    client_secret,
    client_id,
    redirect_uris
  } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });

}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function listFiles(auth) {  
  const drive = google.drive({
    version: 'v3',
    auth
  });
  drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)',
  }, (err, {
    data
  }) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = data.files;
    if (files.length) {
      console.log('Files:');
      files.map((file) => {
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });
}

function createFiles(auth) {
  console.log(auth)
  const drive = google.drive({
    version: 'v3',
    auth
  });

  var fileMetadata = {
    'name': image.name
  };

  var media = {
    mimeType: image.type,
    body: fs.createReadStream(image.tempPath)
  };

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
