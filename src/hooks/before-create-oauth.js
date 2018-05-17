// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const {
  google
} = require('googleapis');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      data,
      app
    } = context;
    const config = app.get('client_secret');
    const keys = config.web;

    if (!data.code) throw new Error('A context must have a code.');

    return await generateToken(keys, data.code)
      .then(v => {
        context.data = {
          client_id: keys.client_id,
          project_id: keys.project_id,
          auth_uri: keys.auth_uri,
          token_uri: keys.token_uri,
          auth_provider_x509_cert_url: keys.auth_provider_x509_cert_url,
          client_secret: keys.client_secret,
          redirect_uris: keys.redirect_uris,
          javascript_origins: keys.javascript_origins,
          code: data.code,
          credentials: v.credentials
        }

        return context;
      })
      .catch(err => {
        throw err;
      });
  };
};

async function generateToken(keys, code) {
  return new Promise((resolve, reject) => {

    const client = new google.auth.OAuth2(
      keys.client_id,
      keys.client_secret,
      keys.redirect_uris[0]
    );

    client.getToken(code, (err, tokens) => {
      if (err) {
        console.error('Error getting oAuth tokens:');
        reject(err)
      }
      client.credentials = tokens;
      resolve(client);
    });
  });
}
