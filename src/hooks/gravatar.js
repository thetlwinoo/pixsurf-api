// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const { app, method, result, params } = context;

    const images = method === 'find' ? result.data : [result];

    await Promise.all(images.map(async image => {
      const avatar = await app.service('media').find({
        query: {
          'filename': image.filename
        }
      });
      console.log(avatar);
    }));
    
    // context.data.avatar = `${gravatarUrl}/${hash}?${query}`;

    return context;
  };
};
