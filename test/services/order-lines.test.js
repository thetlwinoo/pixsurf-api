const assert = require('assert');
const app = require('../../src/app');

describe('\'orderLines\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/order-lines');

    assert.ok(service, 'Registered the service');
  });
});
