const assert = require('assert');
const app = require('../../src/app');

describe('\'stockItemTransactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/stock-item-transactions');

    assert.ok(service, 'Registered the service');
  });
});
