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
<<<<<<< HEAD
    // console.log(context.data)
    const media = await app.service('media').create({ file: context.params.file });
=======

    if (!data.uri) {
      throw new Error('A image must have a uri');
    }

    const uri = data.uri;

    const uploadedImage = await app.service('uploads').create({
      uri
    });
>>>>>>> d24a0e18ba75c53aa7a156ee7144c7a3b229237f

    // const uri = context.data.uri;
    console.log('MEDIA',media)
    if (!media) {
      throw new Error('Upload image failed');
    }

    context.data = {
      name: data.name,
      type: data.type,
<<<<<<< HEAD
      path: data.path,
      media: media._id,
      size: data.size,
=======
      tempPath: '/uploads/' + uploadedImage.id,
      size: uploadedImage.size,
>>>>>>> d24a0e18ba75c53aa7a156ee7144c7a3b229237f
      width: data.width,
      height: data.height,
      stockItemId: data.stockItemId,
      isBaseImage: data.isBaseImage,
      isSmallImage: data.isSmallImage,
      isThumbnail: data.isThumbnail,
<<<<<<< HEAD
      exclude: data.exclude
    }
=======
      exclude: data.exclude,
      uri: data.uri
    };
>>>>>>> d24a0e18ba75c53aa7a156ee7144c7a3b229237f

    return context;
  };
};
