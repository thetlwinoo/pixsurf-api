// Initializes the `media` service on path `/media`
const createService = require('./media.class.js');
const hooks = require('./media.hooks');
const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    mongoUrl: app.get('mongodb')
  };

  // Initialize our service with any options it requires
  app.use('/media',
    multipartMiddleware.single('file'),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('media');

  service.hooks(hooks);
};
