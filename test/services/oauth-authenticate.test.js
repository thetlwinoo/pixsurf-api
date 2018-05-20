const assert = require('assert');
const app = require('../../src/app');

describe('\'oauthAuthenticate\' service', () => {
  it('registered the service', () => {
    const service = app.service('oauth-authenticate');

    assert.ok(service, 'Registered the service');
  });
});
