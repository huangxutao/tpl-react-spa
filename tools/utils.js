const fs = require('fs');
const path = require('path');

exports.resolvePath = function resolve(value) {
  return path.join(__dirname, '..', value);
};

exports.readDir = function readDir (path, cb) {
  const result = fs.readdirSync(path);

  cb(result);
}
