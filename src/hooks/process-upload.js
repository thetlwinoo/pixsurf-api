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
    // console.log(context.data)
    const media = await app.service('media').create({ file: context.params.file });

    // const uri = context.data.uri;
    console.log('MEDIA',media)
    if (!media) {
      throw new Error('Upload image failed');
    }

    context.data = {
      name: data.name,
      type: data.type,
      path: data.path,
      media: media._id,
      size: data.size,
      width: data.width,
      height: data.height,
      stockItemId: data.stockItemId,
      isBaseImage: data.isBaseImage,
      isSmallImage: data.isSmallImage,
      isThumbnail: data.isThumbnail,
      exclude: data.exclude
    }

    return context;
  };
};
