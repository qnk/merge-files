const assert = require('assert');
const File = require('../modules/file');

describe('File ops', function() {
  describe('#splitByCariage()', function() {
    it('should return "" is string param is empty', function() {
      assert.equal(File.splitByCariage(''), '');
    });
    
    it('should split string within "\\r\\n" into and array of strings', function() {
      assert.deepEqual(File.splitByCariage('Hola\r\nHi\r\nBye'), ['Hola','Hi','Bye']);
    });
    
    it('should split string within "\\n" into and array of strings', function() {
      assert.deepEqual(File.splitByCariage('Hola\nHi\nBye'), ['Hola','Hi','Bye']);
    });
  });
});
