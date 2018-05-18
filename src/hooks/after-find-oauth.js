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
      method,
      result,
      params
    } = context;

    const oauthList = method === 'find' ? result.data : [result];

    if (params.query && params.query.code) {
      const data = {
        code: params.query.code
      }

      await app.service('oauth').create(data).then(v => {
        console.log(v)
      });
    } else {
      await Promise.all(oauthList.map(async oauth => {

        const config = app.get('client_secret');
        const keys = config.web;
        const scopes = ['https://www.googleapis.com/auth/drive'];

        const client = new google.auth.OAuth2(
          keys.client_id,
          keys.client_secret,
          keys.redirect_uris[0]
        );

        const authorizeUrl = client.generateAuthUrl({
          access_type: 'offline',
          scope: scopes.join(' ')
        });

        oauth.oAuthUrl = authorizeUrl;
      }));
    }

    return context;
  };
};

// async function createOAuth(app,data) {
//   return new Promise((resolve, reject) => {

//       .then(v => resolve(v))
//       .catch(e => reject(e))
//   });
// }
