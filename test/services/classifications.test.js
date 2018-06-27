const assert = require('assert');
const app = require('../../src/app');

describe('\'classifications\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/classifications');

    assert.ok(service, 'Registered the service');
  });
});
