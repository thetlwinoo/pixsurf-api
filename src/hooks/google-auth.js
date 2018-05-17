// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
const opn = require('opn');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      data,
      app
    } = context;

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

    if (!code || !credentials) {
      opn(authorizeUrl, {
        wait: false
      }).then(cp => cp.unref());

      throw new Error('error:' + authorizeUrl);
    }

    client.setCredentials(credentials);

    return await checkFileList(client).then(v => {
        context.data.authenticate = v ? true : false;
        context.data.credentials = credentials;
        return context;
      })
      .catch(err => {
        if (oauth && oauth.data) {
          app.service('oauth').remove(oauth.data[0]._id);
        }
        throw new Error('Google Drive Authentication Failed.')
      })
    // return context;
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
        // files.forEach(file => {
        //   console.log(`${file.name} (${file.id})`);
        //   returnFiles.push(file);
        //   return false;
        // });
        for (var i = 0; i < files.length; i++) {
          console.log(`${files[i].name} (${files[i].id})`);
          returnFiles.push(files[i]);
          break;
        }
        resolve(returnFiles);
      } else {
        console.log('No files found.', app);
        reject(data);
      }
    });
  });

}
