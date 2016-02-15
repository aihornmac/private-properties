require('es6-collections');

function getPrivateProperties (ctx) {
  var obj = this.get(ctx);
  if (!obj) {
    obj = {};
    this.set(ctx, obj);
  }
  return obj;
}

function createPrivatePropertiesPool () {
  var map = new WeakMap();
  var p = getPrivateProperties.bind(map);
  Object.defineProperties(p, {
    link: {
      enumerable: true,
      value: function (me, that) {
        this.set(me, p(that));
      }.bind(map)
    }
  });
  return p;
}

module.exports = createPrivatePropertiesPool;
