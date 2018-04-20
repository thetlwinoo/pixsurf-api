const assert = require('assert');
const app = require('../../src/app');

describe('\'warehouse.colors\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse-colors');

    assert.ok(service, 'Registered the service');
  });
});
