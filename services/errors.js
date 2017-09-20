const _ = require('underscore');

// TODO: control logs based on environments in order to not publish traces in production env
// You can see an example of this here:
// // https://github.com/qnk/altran-project

const buildError = function (errConst) {
    if(! _.isObject(errConst) || ! _.has(errConst, 'status') || ! _.has(errConst, 'message')) {
        console.log('Error with params', `errConst: ${errConst}`)
        throw Error('Error with params');
    }    

    let err     = new Error();
    err.message = errConst.message || 'There was an unexpected error.';
    err.status  = errConst.status  || 500;

    return err;
}

module.exports = {
    /*
        throw function for sync errors
    */
    throw: (errConst) => {
        var err = buildError;

        // logError.error(err)
        throw err;
    },

    /*
        throw function for async errors
    */
    reject: (errConst) => {
        var err = buildError(errConst);
        // logError.error(err)

        return err;
    },
};
