const assert = require('assert');
const app = require('../../src/app');

describe('\'buyingGroups\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/buying-groups');

    assert.ok(service, 'Registered the service');
  });
});
