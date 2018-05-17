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

    const config = app.get('client_secret');
    const keys = config.web;

    if (params.query && params.query.code) {
      const data = {
        code: params.query.code
      }

      await app.service('oauth').create(data).then(v=>{
        console.log(v)        
      });      
      // const oauth = await app.service('oauth').find({
      //   client_id: keys.client_id
      // });

      // console.log(oauth);

      // if(oauth){
      //   const deleteAuth = await app.service('oauth').delete(oauth._id);
      //   console.log(deleteAuth)
      //   const createAuth = await app.service('oauth').create(data);
      // }
      // else
      // {
      //   const createAuth = await app.service('oauth').create(data);
      // }
    }
    context.data = {
      error: 'Google Drive Authentication Failed!'
    }

    return context;
  };
};

// async function createOAuth(app,data) {
//   return new Promise((resolve, reject) => {

//       .then(v => resolve(v))
//       .catch(e => reject(e))
//   });
// }
