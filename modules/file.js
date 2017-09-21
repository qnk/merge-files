const fs = require('fs');
const Q = require('q');
const EXTENSION = process.env.EXTENSION || 'md';

let file = {
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
