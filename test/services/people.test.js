const assert = require('assert');
const app = require('../../src/app');

describe('\'people\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/people');

    assert.ok(service, 'Registered the service');
  });
});
