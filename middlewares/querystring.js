const querystring = {
    verify: (query) => {
        const file = query.file || '';
        const extend = query.extend || '';

        if(! file === '' || extend === '') {
            throw Error("Missing 'file' or 'extend' params on querystring");
        }
    },
}

module.exports = querystring
