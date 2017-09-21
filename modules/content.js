const _ = require('underscore');
const Data = require('./data');

// TODO: Apply functional programming to improve performance
// TODO: Call inside these functions to another module to treat data operations
// An example can be found here:
// https://github.com/qnk/altran-project/blob/development/services/DataService.js

function commonValues(arr1, arr2) {
    return _.intersection(arr1, arr2);
}

function cleanCommon(common, arr) {
    let content;
    
    for(let i in common) {
        content = _.without(arr, common[i]);
    }

    return content;
}

function pushContent(arr, toPush) {
    for(let el of toPush) {
        arr.push(el);
    }
    
    return arr;
}
    
// TODO: Improve for 1..N with spread operator
let content = {
    removeDuplicates: (arr1, arr2) => {
        let common = commonValues(arr1, arr2);
        
        //Remove common values from file2
        let arr2cleaned = cleanCommon(common, arr2);
        
        return pushContent(arr1, arr2cleaned);
    },
    
    convertToString: (arr) => {
        let str = '';
        let arrWithCarrige = Data.addCarriage(arr);
        
        for(let i in arrWithCarrige) {
            str += arrWithCarrige[i];
        }
        
        return str;
    },
};

module.exports = content;
