// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const {
      app,
      method,
      result,
      params,
      data
    } = context;

    var items = data;

    for (var i = 0; i < items.length; i++) {
      var cag = items[i];

      var subcagArray = [];
      for (var j = 0; j < cag.children.length; j++) {
        var subcag = cag.children[j];

        var classiArray = [];
        for (var k = 0; k < subcag.children.length; k++) {
          var classifications = subcag.children[k];

          var _translate = classifications.name.replace(/[^a-zA-Z ]/g, "");
          _translate = _translate.replace(/\s/g, "").toUpperCase();

          var _classi = {
            title: classifications.name,
            type: "item",
            slug: classifications.slug,
            translate: "NAV." + _translate,
            url: classifications.path
          }
          var _newClassi = await app.service('general/classifications').create(_classi);
          classiArray.push(_newClassi._id);
        }

        var _translate = subcag.name.replace(/[^a-zA-Z ]/g, "");
        _translate = _translate.replace(/\s/g, "").toUpperCase();

        var _subcag = {
          title: subcag.name,
          type: "collapsable",
          slug: subcag.slug,
          translate: "NAV." + _translate,
          url: subcag.path,
          children: classiArray
        }

        // console.log(_subcag)
        var _newSubCag = await app.service('general/subcategories').create(_subcag);
        subcagArray.push(_newSubCag._id);
      }

      var _translate = cag.name.replace(/[^a-zA-Z ]/g, "");
      _translate = _translate.replace(/\s/g, "").toUpperCase();

      var _cag = {
        title: cag.name,
        type: "group",
        slug: cag.slug,
        translate: "NAV." + _translate,
        url: cag.path,
        data: cag.data,
        children: subcagArray
      }
      await app.service('general/categories').create(_cag);
    }

    return context;
  };
};
