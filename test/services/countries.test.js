const assert = require('assert');
const app = require('../../src/app');

describe('\'countries\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/countries');

    assert.ok(service, 'Registered the service');
  });
});
