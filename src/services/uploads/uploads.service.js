// Initializes the `uploads` service on path `/uploads`
const createService = require('feathers-mongoose');
const createModel = require('../../models/uploads.model');
const hooks = require('./uploads.hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs('./uploads');
const multer = require('multer');
const multipartMiddleware = multer();
const dauria = require('dauria');
const cloudinary = require('cloudinary');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  app.use('/uploads',
    multipartMiddleware.single('uri'),    
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({
      Model: blobStorage
    })
  );

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('uploads');

  service.hooks(hooks);
};
