const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  const arrSeparator = [];
  const arrResult = [];
  let addition = '';
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    arrSeparator.push(options.addition === null ? String(options.addition) : options.addition);
  }
  addition = arrSeparator.join(options.additionSeparator);
  for (let i = 0; i < options.repeatTimes; i++) {
    arrResult.push(str + addition);
  }
  return arrResult.join(options.separator);
}

module.exports = {
  repeater
};
