const atob = require('atob');
const {
  authenticate
} = require('@feathersjs/authentication').hooks;

const {
  getBase64DataURI,
  parseDataURI
} = require('dauria');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [authenticate('jwt')],
    create: [authenticate('jwt'), function (hook) {
      if (hook.params.file) {
        hook.data.file = hook.params.file;
      } else if (hook.data.uri) {
        uriToFile(hook.data.uri).then(file => {
          hook.data.file = {
            fieldname: 'file',
            originalname: hook.data.name,
            encoding: 'base64',
            mimetype: file.mimetype,
            buffer: file.buffer,
            size: hook.data.size
          }
        });
      }
    }],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

function uriToFile(uri) {
  return new Promise((resolve, reject) => {
    const result = parseDataURI(uri);
    contentType = result.MIME;
    buffer = result.buffer;

    if (result) resolve({
      mimetype: result.MIME,
      buffer: result.buffer,
      mediatype: result.mediaType
    })
    else reject('error')
  })

}
