const assert = require('assert');
const app = require('../../src/app');

describe('\'suppliers\' service', () => {
  it('registered the service', () => {
    const service = app.service('purchasing/suppliers');

    assert.ok(service, 'Registered the service');
  });
});
