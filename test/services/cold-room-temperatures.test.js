const assert = require('assert');
const app = require('../../src/app');

describe('\'coldRoomTemperatures\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/cold-room-temperatures');

    assert.ok(service, 'Registered the service');
  });
});
