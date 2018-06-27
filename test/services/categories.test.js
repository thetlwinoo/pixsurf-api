const assert = require('assert');
const app = require('../../src/app');

describe('\'categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/categories');

    assert.ok(service, 'Registered the service');
  });
});
