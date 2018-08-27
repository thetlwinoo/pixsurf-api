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
      const response = await app.service('general/people').find({
        query: {
          emailAddress: user.email
        }
      });      
      if (response && response.data && response.data.length > 0) {
        const profile = response.data[0];
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
