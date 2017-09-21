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
    
    arrsAreEqual: (arr1, arr2) => {
        let equals = true;
        
        if(arr1.length ===arr2.length) {
            for(let i in arr1) {
                if(arr1[i] !== arr2[i]) {
                    equals = false;
                }
            }
        }
        
        return equals;
    }
};

module.exports = data;
