const assert = require('assert');
const app = require('../../src/app');

describe('\'orderTracking\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/order-tracking');

    assert.ok(service, 'Registered the service');
  });
});
