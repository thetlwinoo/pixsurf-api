const assert = require('assert');
const app = require('../../src/app');

describe('\'supplierCategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/supplier-categories');

    assert.ok(service, 'Registered the service');
  });
});
