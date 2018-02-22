const fs = require('fs');
const path = require('path');

exports.resolvePath = function resolve(value) {
    return path.join(__dirname, '..', value);
};

exports.assetsPath = function (_path) {
    const assetsSubDirectory =  process.env.NODE_ENV === 'production'
        ? '/'
        : '/src/assets';

    return path.posix.join(assetsSubDirectory, _path);
}

exports.readDir = function readDir (_path, cb) {
    const result = fs.readdirSync(_path);

    cb(result);
}
