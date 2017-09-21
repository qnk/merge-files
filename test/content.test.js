const assert = require('assert');
const Content = require('../modules/content');

describe('Content', function() {
  describe('#buildContent()', function() {
      it('both arrays are equal, should return the same array', function() {
        assert.deepEqual(Content.buildContent(['1','Hola'], ['1','Hola']), ['1','Hola']);
      });
      
      it('both arrays are different, should build content', function() {
        assert.deepEqual(Content.buildContent(['Hola','1'], ['Hola','2']), ['Hola','1','2']);
      });
  });
});
