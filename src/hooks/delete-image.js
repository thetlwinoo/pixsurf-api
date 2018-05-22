// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      id,
      app
    } = context;

    const image = await app.service('general/images').get(id);
    if (!image) throw new Error('Delete Image Failed');

    const media = await app.service('media').remove(image.media);
    if (media.error) {
      throw new Error('Delete Image Failed')
    }

    return context;
  };
};
