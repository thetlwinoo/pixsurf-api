const assert = require('assert');
const app = require('../../src/app');

describe('\'warehouse.packageTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('warehouse-package-types');

    assert.ok(service, 'Registered the service');
  });
});
