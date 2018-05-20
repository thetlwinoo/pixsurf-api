const assert = require('assert');
const app = require('../../src/app');

describe('\'meadias\' service', () => {
  it('registered the service', () => {
    const service = app.service('meadias');

    assert.ok(service, 'Registered the service');
  });
});
