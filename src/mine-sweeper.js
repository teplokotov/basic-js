const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for(let k = 0; k < matrix[i].length; k++) {
      result[i][k] = 0;
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k]) {
        for (let h = i - 1; h <= i + 1; h++) {
          for (let z = k - 1; z <= k + 1; z++) {
            if (h >= 0 && z >= 0 && h < matrix.length && z < matrix.length) {
              if (!(h === i && z === k)) result[h][z]++;
            }
          }
        }
      }
    }
  }
  
  return result;
}

module.exports = {
  minesweeper
};
