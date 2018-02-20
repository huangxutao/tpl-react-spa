const path = require('path')

exports.resolvePath = function resolve(value) {
  return path.join(__dirname, '..', value);
};
