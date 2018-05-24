const assert = require('assert');
const app = require('../../src/app');

describe('\'addressTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/address-types');

    assert.ok(service, 'Registered the service');
  });
});
