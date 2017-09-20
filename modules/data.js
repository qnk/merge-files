const _ = require('underscore');

let data = {
    addCarriage: (arr) => {
        var aux = [];
        
        for(let i in arr) {
           aux.push(arr[i] + '\r\n'); 
        }
        
        return aux.toString();
    },
};

module.exports = data;