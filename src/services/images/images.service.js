// Initializes the `images` service on path `/general/images`
const createService = require('feathers-mongoose');
const createModel = require('../../models/images.model');
const hooks = require('./images.hooks');
const multer = require('multer');
const multipartMiddleware = multer();

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/general/images',
    multipartMiddleware.single('file'),
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('general/images');

  service.hooks(hooks);
};
