const assert = require('assert');
const app = require('../../src/app');

describe('\'keywords\' service', () => {
  it('registered the service', () => {
    const service = app.service('keywords');

    assert.ok(service, 'Registered the service');
  });
});
