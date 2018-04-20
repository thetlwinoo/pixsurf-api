const assert = require('assert');
const app = require('../../src/app');

describe('\'packageTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/package-types');

    assert.ok(service, 'Registered the service');
  });
});
