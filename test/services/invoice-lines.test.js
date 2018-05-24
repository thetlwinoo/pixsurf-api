const assert = require('assert');
const app = require('../../src/app');

describe('\'invoiceLines\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/invoice-lines');

    assert.ok(service, 'Registered the service');
  });
});
