const assert = require('assert');
const app = require('../../src/app');

describe('\'oauth2callback\' service', () => {
  it('registered the service', () => {
    const service = app.service('oauth2callback');

    assert.ok(service, 'Registered the service');
  });
});
