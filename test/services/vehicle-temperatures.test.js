const assert = require('assert');
const app = require('../../src/app');

describe('\'vehicleTemperatures\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/vehicle-temperatures');

    assert.ok(service, 'Registered the service');
  });
});
