const assert = require('assert');
const app = require('../../src/app');

describe('\'addresses\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/addresses');

    assert.ok(service, 'Registered the service');
  });
});
