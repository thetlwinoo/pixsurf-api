const assert = require('assert');
const app = require('../../src/app');

describe('\'medias\' service', () => {
  it('registered the service', () => {
    const service = app.service('medias');

    assert.ok(service, 'Registered the service');
  });
});
