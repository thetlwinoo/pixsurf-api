const assert = require('assert');
const app = require('../../src/app');

describe('\'deliveryMethods\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/delivery-methods');

    assert.ok(service, 'Registered the service');
  });
});
