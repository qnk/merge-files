const assert = require('assert');
const Content = require('../modules/content')

describe('Content', function() {
  describe('#removeDuplicates()', function() {
      it('both arrays are equal, should return the same array', function() {
        assert.deepEqual(Content.removeDuplicates(['Ho','1'], ['Ho','1']), ['Ho','1']);
      });
  });
});
