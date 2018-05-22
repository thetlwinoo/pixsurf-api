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
    const media = await app.service('media').create(context.data);

    // const uri = context.data.uri;
    console.log('MEDIA', media)
    if (!media) {
      throw new Error('Upload image failed');
    }

    context.data = {
      name: data.name,
      type: data.type,
      path: data.path,
      media: media._id,
      fileName: media.filename,
      size: data.size,
      stockItemId: data.stockItemId,
      isBaseImage: false,
      isSmallImage: false,
      isThumbnail: false,
      webkitRelativePath: data.webkitRelativePath,
      lastModified: data.lastModified,
      sortOrder: 0,
      exclude: false
    }

    return context;
  };
};
