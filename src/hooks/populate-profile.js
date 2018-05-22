// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params
    } = context;
    const users = method === 'find' ? result.data : [result];

    await Promise.all(users.map(async user => {
      const profile = await app.service('general/people').find({
        email: user.email
      });

      if (profile) {
        user.profile = {
          fullName: profile.fullName,
          preferredName: profile.preferredName,
          logonName: profile.logonName
        };
      }

    }));
    return context;
  };
};
