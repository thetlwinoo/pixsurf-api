const assert = require('assert');
const app = require('../../src/app');

describe('\'warehouse.packagetypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse-packagetypes');

    assert.ok(service, 'Registered the service');
  });
});
