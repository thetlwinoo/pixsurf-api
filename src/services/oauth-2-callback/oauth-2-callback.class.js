/* eslint-disable no-unused-vars */
const {
  google
} = require('googleapis');
const express = require('express');
const opn = require('opn');
const path = require('path');
const fs = require('fs');

const keyPath = path.join(__dirname, 'oauth2.keys.json');
let keys = {
  redirect_uris: ['']
};
if (fs.existsSync(keyPath)) {
  keys = require(keyPath).web;
}

const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const destroyer = require('server-destroy');
const TOKEN_PATH = 'credentials.json';
// Create an oAuth2 client to authorize the API call
const client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

// Generate the url that will be used for authorization
this.authorizeUrl = client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes
});

class Service {
  constructor(options) {
    this._options = options || {
      scopes: []
    };
  }

  async find(params) {
    const code = params.query.code;
    return new Promise((resolve, reject) => {
      client.getToken(code, (err, tokens) => {
        if (err) {
          reject(err)
        }

        client.setCredentials(tokens);

        fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        
        resolve(client)
      });
    });


    return [];
  }

  async get(id, params) {
    console.log(id, params)
    return {
      id: id,
      message: 'ok'
    }
  }

  async create(data, params) {
    return new Promise((resolve, reject) => {
      // grab the url that will be used for authorization
      this.authorizeUrl = this.oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes.join(' ')
      });
      const server = http.createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            const qs = querystring.parse(url.parse(req.url).query);
            res.end('Authentication successful! Please return to the console.');
            server.destroy();
            const {
              tokens
            } = await this.oAuth2Client.getToken(qs.code);
            this.oAuth2Client.credentials = tokens;

            fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
              if (err) console.error(err);
              console.log('Token stored to', TOKEN_PATH);
            });

            resolve(this.oAuth2Client);
          }
        } catch (e) {
          reject(e);
        }
      }).listen(3000, () => {
        // open the browser to the authorize url to start the workflow
        opn(this.authorizeUrl, {
          wait: false
        }).then(cp => cp.unref());
      });
      destroyer(server);
    });
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return {
      id
    };
  }

  /**
   * Lists the names and IDs of up to 10 files.
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   */
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
  //   listFiles(auth) {
  //     console.log('listing',auth)
  //     const service = google.drive('v3');
  //     service.files.list({
  //       auth: auth,
  //       pageSize: 10,
  //       fields: 'nextPageToken, files(id, name)'
  //     }, (err, res) => {
  //       if (err) {
  //         console.error('The API returned an error.');
  //         throw err;
  //       }
  //       const files = res.data.files;
  //       if (files.length === 0) {
  //         console.log('No files found.');
  //       } else {
  //         console.log('Files:');
  //         for (const file of files) {
  //           console.log(`${file.name} (${file.id})`);
  //         }
  //       }
  //     });
  //   }
}


module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
