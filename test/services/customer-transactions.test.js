const assert = require('assert');
const app = require('../../src/app');

describe('\'customerTransactions\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/customer-transactions');

    assert.ok(service, 'Registered the service');
  });
});
