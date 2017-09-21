const fs = require('fs');
const Promise = require('bluebird');
const Q = require('q');
const EXTENSION = process.env.EXTENSION || 'md';

let file = {
    // TODO: use ES6's spread operator (...) to verify 1..N files, not just 2
    doesNotExist: (file) => {
        let deferred = Q.defer();

        // TODO: Avoid the use of bluebird, Q, and the deferred pattern
        // with native ES6 Promise
        Promise.coroutine(function*(file) {
            let fileExists = fs.readFileSync(file);

            return true;
        })(file)    
        .then((found) => {
            deferred.resolve(found);
        })
        .catch((ex) => {
            // TODO: change status code. Use functions from services/errors.js
            deferred.reject(new Error(`${file} does not exist`));
        });

        return deferred.promise;
    },
    
    content: (file) => {
        return fs.readFileSync(file[0],'utf8');
    },
    
    splitByCariage: (fileContent) => {
        // Split lines by it carriage return
        // Control several OS where chain could be different
        let array = (fileContent.includes("\r\n"))
            ? fileContent.split("\r\n")
            : fileContent.split("\n");
        
        return array;
    },
    
    append: (path, content) => {
        fs.closeSync(fs.openSync(path, 'w'));
        fs.appendFileSync(path, content);
      
        return;
    },

    attachExtension: (file) => {
       return [ `${file}.${EXTENSION}`];
    },
};

module.exports = file;
