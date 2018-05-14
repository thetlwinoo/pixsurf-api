// const {
//   google
// } = require('googleapis');
// const express = require('express');
// const opn = require('opn');
// const path = require('path');
// const fs = require('fs');

// const keyfile = path.join(__dirname, 'credentials.json');
// const keys = JSON.parse(fs.readFileSync(keyfile));
const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

// const client = new google.auth.OAuth2(
//   keys.web.client_id,
//   keys.web.client_secret,
//   keys.web.redirect_uris[0]
// );

class Service {
  constructor(options) {
    if (!options) {
      throw new Error('google-drive: constructor `options` must be provided');
    }

    if (!options.Model) {
      throw new Error('google-drive: constructor `options.Model` must be provided');
    }

    this.Model = options.Model;
  }

  extend(obj) {
    return Proto.extend(obj, this);
  }

  get(id) {

  }

  create(body, params = {}) {
    let {
      id,
      uri,
      buffer,
      contentType
    } = body;

    return new Promise((resolve, reject) => {

    });
  }


  remove(id) {

  }
}

module.exports = function init(options) {

  // var authorizeUrl = client.generateAuthUrl({
  //   access_type: 'offline',
  //   scope: scopes
  // });

  // options.authorizeUrl = authorizeUrl;

  return new Service(options);
};

module.exports.Service = Service;
