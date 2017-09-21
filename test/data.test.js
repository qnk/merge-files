const assert = require('assert');
const Data = require('../modules/data');

describe('Data', function() {
  describe('#addCarriage()', function() {
    it('should add "\\r\\n" to every array element given as param', function() {
      assert.deepEqual(Data.addCarriage(['Ho','1', '---']), ['Ho\r\n','1\r\n', '---\r\n']);
    });
    
    it('should return an emtpy array if recieves an empty array', function() {
      assert.deepEqual(Data.addCarriage([]), []);
    });
  });
  
  describe('#arrsAreEqual()', function() {
    // TODO: Create test and correct bug if a file has several carriage returns
    // in the middle of its content
    it('should be true', function() {
      assert.ok(Data.arrsAreEqual(['Ho','1'], ['Ho','1']));
    });  
  });
});
