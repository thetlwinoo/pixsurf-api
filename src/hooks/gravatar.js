// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const {
      filename
    } = context.data;

    const images = await app.service('media').find({
      query: {
        'filename': filename
      }
    });

    console.log(images);
    // context.data.avatar = `${gravatarUrl}/${hash}?${query}`;

    return context;
  };
};
