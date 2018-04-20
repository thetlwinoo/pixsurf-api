const assert = require('assert');
const app = require('../../src/app');

describe('\'stockGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse/stock-groups');

    assert.ok(service, 'Registered the service');
  });
});
