const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let k = 0; k < matrix[i].length; k++) {
      if (i !== 0) {
        if (matrix[i - 1][k] === 0) {
          result[i][k] = 0;
        } else {
          result[i][k] = matrix[i][k];
        }
      } else {
        result[i][k] = matrix[i][k];
      }
    }
  }
  return result.reduce((acc, item) => {
    return item.reduce((acc, item) => {
      return acc = item + acc;
    }, acc);
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
