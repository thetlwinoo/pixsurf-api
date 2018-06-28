const assert = require('assert');
const app = require('../../src/app');

describe('\'customRunner\' service', () => {
  it('registered the service', () => {
    const service = app.service('custom-runner');

    assert.ok(service, 'Registered the service');
  });
});
