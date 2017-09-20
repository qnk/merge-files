// TODO: move conts to a const file and/or define them as env. vars.
const EXTENSION = 'md';

let path = {
    attachExtension: (file) => {
       return [ `${file}.${EXTENSION}`];
    },
};

module.exports = path;
