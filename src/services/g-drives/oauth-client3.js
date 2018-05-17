const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'credentials.json';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const opn = require('opn');
const destroyer = require('server-destroy');

class OAuthClient {
  constructor(options) {
    this._options = options || {
      scopes: []
    };
  }

  async authenticate(scopes) {
    return new Promise((resolve, reject) => {
      fs.readFile('client_secret.json', (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Drive API.
        this.authorize(JSON.parse(content), scopes)
          .then(c => resolve(c))
          .catch(err => reject(err));
      });
    });
  }

  authorize(credentials, scopes) {
    return new Promise((resolve, reject) => {
      const {
        client_secret,
        client_id,
        redirect_uris
      } = credentials.web;
      const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
      // Check if we have previously stored a token.
      fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return this.getAccessToken(oAuth2Client, scopes);
        oAuth2Client.setCredentials(JSON.parse(token));
        resolve(oAuth2Client)
      });
    });
  }

  getAccessToken(oAuth2Client, scopes) {
    return new Promise((resolve, reject) => {
      const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
      });
      //   console.log('Authorize this app by visiting this url:', authUrl);
      //   const rl = readline.createInterface({
      //     input: process.stdin,
      //     output: process.stdout,
      //   });

      //   rl.question('Enter the code from that page here: ', (code) => {
      //     rl.close();
      //     oAuth2Client.getToken(code, (err, token) => {
      //       if (err) reject(err);
      //       oAuth2Client.setCredentials(token);
      //       // Store the token to disk for later program executions
      //       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
      //         if (err) console.error(err);
      //         console.log('Token stored to', TOKEN_PATH);
      //       });
      //       resolve(oAuth2Client);
      //     });
      //   });
      opn(authUrl, {
          wait: false
        })
        .then(cp => cp.unref())
        .catch(err => reject(err))
    });
  }

  listFiles(auth) {
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
}

module.exports = new OAuthClient();
