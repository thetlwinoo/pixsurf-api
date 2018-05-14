const assert = require('assert');
const app = require('../../src/app');

describe('\'gclient\' service', () => {
  it('registered the service', () => {
    const service = app.service('google/gclient');

    assert.ok(service, 'Registered the service');
  });
});
