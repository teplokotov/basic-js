const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const result = [];
  let str = [];
  for (let i = 0; i < String(num).length; i++) {
    str = String(num).split('');
    str.splice(i,1);
    result.push(Number(str.join('')));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
