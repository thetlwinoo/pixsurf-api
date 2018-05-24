const assert = require('assert');
const app = require('../../src/app');

describe('\'geoLocations\' service', () => {
  it('registered the service', () => {
    const service = app.service('general/geo-locations');

    assert.ok(service, 'Registered the service');
  });
});
