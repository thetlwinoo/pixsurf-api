const assert = require('assert');
const app = require('../../src/app');

describe('\'setDefault\' service', () => {
  it('registered the service', () => {
    const service = app.service('addresses/set-default');

    assert.ok(service, 'Registered the service');
  });
});
