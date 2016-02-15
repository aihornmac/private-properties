var assert = require('better-assert');
var isPlainObject = require('is-plain-object');
var props = require('../');

describe('Private Properties test', function () {

  var p = props();

  it('two props will be different', function () {
    var p1 = props();
    var p2 = props();
    var obj = {};
    assert(p1(obj) !== p2(obj));
  });

  it('everythign shall lose when props be bound to other things', function () {
    var p = props();
    p = p.bind({});
    assert(!(p && p.link));
  });

  describe('self:', function () {

    it('creates a function when exec', function () {
      assert('function' === typeof p);
    });

    it('returns a empty plain object by default', function () {
      var a = { name: 'a' };
      var props = p(a);
      assert(isPlainObject(props));
      assert(!Object.keys(props).length);
    });

    it('creates a function when exec', function () {
      assert('function' === typeof p);
    });

  });

  describe('methods:', function () {

    describe('link', function () {

      var obj1 = {};
      var obj2 = {};
      p.link(obj1, obj2);

      it('two props equal each other', function () {
        assert( p(obj1) === p(obj2) );
      });

    });

  });

});
