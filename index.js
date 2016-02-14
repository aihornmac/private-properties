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
  return getPrivateProperties.bind(map);
}

module.exports = createPrivatePropertiesPool;
