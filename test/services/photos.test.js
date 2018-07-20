const assert = require('assert');
const app = require('../../src/app');

describe('\'photos\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/photos');

    assert.ok(service, 'Registered the service');
  });
});
