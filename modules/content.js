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
    return _.difference(arr, common);
}

function pushContent(arr, toPush) {
    for(let el of toPush) {
        arr.push(el);
    }
    
    return arr;
}
    
let content = {
    buildContent: (arr1, arr2) => {
        if(Data.arrsAreEqual(arr1, arr2)) {
            return arr1;
        }
        
        let common = commonValues(arr1, arr2);

        //Remove common values from file2
        let arrCleaned = cleanCommon(common, arr2);
        
        // Free of duplicates
        if(arrCleaned.length === 0) {
            return arr1;
        }

        return pushContent(arr1, arrCleaned);
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
