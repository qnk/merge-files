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
    
    it('arrays are different but longer, should build content', function() {
      assert.deepEqual(Content.buildContent(['Ho','1','Al'], ['Ho','Al','2']), ['Ho','1','Al','2']);
    });
    
    it('all content is different, return them in a single array', function() {
      assert.deepEqual(Content.buildContent(['Hello','1'], ['Hola','2']), ['Hello','1','Hola','2']);
    });
    
    it('do not crash with empty values. Should be true', function() {
      assert.deepEqual(Content.buildContent(['Hola','1'], ['Hola','','','','2']), ['Hola','1','','','','2']);
    });
  });
});
