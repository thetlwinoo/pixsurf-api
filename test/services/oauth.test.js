const assert = require('assert');
const app = require('../../src/app');

describe('\'oauth\' service', () => {
  it('registered the service', () => {
    const service = app.service('oauth');

    assert.ok(service, 'Registered the service');
  });
});
