const assert = require('assert');
const app = require('../../src/app');

describe('\'warehouse.stockItems\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse-stock-items');

    assert.ok(service, 'Registered the service');
  });
});