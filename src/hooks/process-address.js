// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const user = context.params.user;    
    
    if (user && context.data) {
      context.data.person = user._id;
      context.data.lastEditedBy = user._id;      
    }

    console.log(context.data)
    return context;
  };
};
