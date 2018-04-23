const assert = require('assert');
const app = require('../../src/app');

describe('\'stockItemHoldings\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/stock-item-holdings');

    assert.ok(service, 'Registered the service');
  });
});
