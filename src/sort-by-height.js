const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  let arrWithoutMinusOne = [];
  const result = [];
  let count = 0;
  arr.forEach((item, index) => {
    if(item === -1) indexes.push(index);
  });
  arr.sort((a, b) => a - b);
  arrWithoutMinusOne = arr.filter(item => item !== -1);
  for (let i = 0; i < arr.length; i++) {
    if (indexes.includes(i)) {
      result.push(-1);
    } else {
      result.push(arrWithoutMinusOne[count]);
      count++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
