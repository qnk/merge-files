const _ = require('underscore');

let data = {
    addCarriage: (arr) => {
        let aux = [];
        
        for(let i in arr) {
           aux.push(arr[i] + '\r\n');
           //Remove first comma resuting from chaining
           arr[i].substring(1, arr[i].length);
        }
        
        return aux;
    },
};

module.exports = data;