/* eslint-disable no-unused-vars */
const {
  google
} = require('googleapis');
const express = require('express');
const opn = require('opn');
const path = require('path');
const fs = require('fs');

const keyPath = path.join(__dirname, 'client_secret.json');
let keys = {
  redirect_uris: ['']
};
if (fs.existsSync(keyPath)) {
  keys = require(keyPath).web;
}
const TOKEN_PATH = 'credentials.json';
// Create an oAuth2 client to authorize the API call
const client = new google.auth.OAuth2(
  keys.client_id,
  keys.client_secret,
  keys.redirect_uris[0]
);

class Service {
  constructor(options) {
    this._options = options || {
      scopes: []
    };
  }

  async find(params) {
    const code = params.query.code;
    return new Promise((resolve, reject) => {
      if (!code) reject('No code found');
      client.getToken(code, (err, tokens) => {
        if (err) {
          reject(err)
        }
        client.setCredentials(tokens);

        fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
          resolve(client)
        });
      });
    });

    return [];
  }

  async get(id, params) {

    return {
      id: id,
      message: 'ok'
    }
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
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
}


module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
