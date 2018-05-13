const assert = require('assert');
const app = require('../../src/app');

describe('\'googleDrive\' service', () => {
  it('registered the service', () => {
    const service = app.service('google-drive');

    assert.ok(service, 'Registered the service');
  });
});
