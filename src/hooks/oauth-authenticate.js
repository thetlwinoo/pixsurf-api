// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      data
    } = context;
    var authorize = false;

    const config = app.get('client_secret');
    const keys = config.web;
    const scopes = ['https://www.googleapis.com/auth/drive'];
    const client = new google.auth.OAuth2(
      keys.client_id,
      keys.client_secret,
      keys.redirect_uris[0]
    );
    const oauth = await app.service('oauth').find({
      client_id: keys.client_id
    });
    const authorizeUrl = client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' ')
    });

    var code;
    var credentials;

    if (oauth && oauth.data && oauth.data.length > 0) {
      code = oauth.data[0].code;
      credentials = oauth.data[0].credentials;
    }

    if (code && credentials) {
      client.setCredentials(credentials);
      const fileList = await checkFileList(client)
        .then(v => authorize = true)
    }

    context.data = {
      authorized: authorize ? true : false,
      oauthurl: authorizeUrl
    }

    context.service.authentication = context.data ? [context.data] : [];

    return context;
  };
};

async function checkFileList(auth) {
  return new Promise((resolve, reject) => {
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
      if (err) reject('The API returned an error: ' + err);

      const files = data.files;
      if (files && files.length) {
        console.log('Files:');
        returnFiles = [];
        for (var i = 0; i < files.length; i++) {
          console.log(`${files[i].name} (${files[i].id})`);
          returnFiles.push(files[i]);
          break;
        }
        resolve(returnFiles);
      } else {
        console.log('No files found.');
        reject(data);
      }
    });
  });

}
