const assert = require('assert');
const app = require('../../src/app');

describe('\'stateProvinces\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/state-provinces');

    assert.ok(service, 'Registered the service');
  });
});
