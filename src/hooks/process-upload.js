// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      data,
      params
    } = context;

    if (!data.uri) {
      throw new Error('A image must have a uri');
    }

    const uri = data.uri;

    const uploadedImage = await app.service('uploads').create({
      uri
    });

    // const uri = context.data.uri;

    if (!uploadedImage) {
      throw new Error('Upload image failed');
    }

    context.data = {
      name: data.name,
      type: data.type,
      tempPath: '/uploads/' + uploadedImage.id,
      size: uploadedImage.size,
      width: data.width,
      height: data.height,
      stockItemId: data.stockItemId,
      isBaseImage: data.isBaseImage,
      isSmallImage: data.isSmallImage,
      isThumbnail: data.isThumbnail,
      exclude: data.exclude,
      uri: data.uri
    };

    return context;
  };
};
