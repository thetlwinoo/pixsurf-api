// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const {
  extname
} = require('path');
const Proto = require('uberproto');
const errors = require('@feathersjs/errors');
const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'credentials.json';

class OAuth {
  constructor(options) {
    this.model = {
      message: '',
      error: {},
      auth: {},
      success: false
    }
  }

  checkOAuth() { 
    fs.readFile('client_secret.json', (err, content) => {
      if (err) {
        var model = {
          message: 'Error loading client secret file:',
          error: err,
          success: false
        }

        return model;
      }
      // Authorize a client with credentials, then call the Google Drive API.
      return this.authorize(JSON.parse(content));
    });
  }

  authorize(credentials) {
    const {
      client_secret,
      client_id,
      redirect_uris
    } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);
    // Check if we have previously stored a token.
    
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return this.getAccessToken(oAuth2Client);
      oAuth2Client.setCredentials(JSON.parse(token));

      var model = {
        message: 'Google API authenticate successfully',
        error: {},
        auth: oAuth2Client,
        success: true
      }
      return model;
    });
  }

  getAccessToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });

    var model = {
      message: 'Authorize this app by visiting with url',
      authUrl: authUrl,
      success: false
    }

    throw new Error(model)
  }

  getAuth(code, oAuth2Client) {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return {
        error: err,
        success: false
      };

      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });

      var model = {
        message: 'Google API authenticate successfully',
        error: {},
        auth: oAuth2Client,
        success: true
      }
      return model;
    });
  }
}

module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    const auth = new OAuth(data);

    var check = auth.checkOAuth();
    console.log(check)
    if (check.success) {
      console.log(check);
    } else {
      throw new Error(check)
    }

    return context;
  };

};
