exports.toObject = function (options = {}, dataField = 'data') {
    return function (hook) {
      // Only perform this if it's used as an after hook.
      if (hook.result) {
        console.log('hook.result',hook.result)
      }
    };
  };
  