const _ = require('underscore');

let data = {
    addCarriage: (arr) => {
        // TODO: Control if OS requieres to contact "\n or \r\n"
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