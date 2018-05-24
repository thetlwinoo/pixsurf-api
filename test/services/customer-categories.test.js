const assert = require('assert');
const app = require('../../src/app');

describe('\'customerCategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales/customer-categories');

    assert.ok(service, 'Registered the service');
  });
});
