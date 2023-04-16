const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const buffer = {};
  const result = [];
  for (let i = 0; i <= str.length; i++) {
    if(!buffer[str[i]]) buffer[str[i]] = 1;
    if (str[i] === str[i - 1] && str[i - 1] ) {
      buffer[str[i]]++;
    } else if (str[i - 1]) {
      result.push(buffer[str[i - 1]] + str[i - 1]);
      delete buffer[str[i - 1]];
    }
  }
  return result.join('').replace(/1/g, '');;
}

module.exports = {
  encodeLine
};
