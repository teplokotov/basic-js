const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const result = [];
  let isSkipNext = false;
  if (arr instanceof Array){
    arr.forEach((item, index) => {
      if (item == '--discard-next') {
        if (arr[index + 2] !== '--discard-prev') isSkipNext = true;
        return;
      } else if (item == '--discard-prev') {
        result.pop();
        return;
      } else if (item == '--double-next') {
        if (arr[index + 1]) result.push(arr[index + 1]);
        return;
      } else if (item == '--double-prev') {
        if (arr[index - 1] && arr[index - 2] !== '--discard-next') result.push(arr[index - 1]);
        return;
      } else {
        isSkipNext ? isSkipNext = false : result.push(item);
      }
    });
  }
  else {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  return result;
}

module.exports = {
  transform
};
