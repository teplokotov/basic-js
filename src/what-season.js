const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(getDate) {
  if (getDate) {
    if ((Object.prototype.toString.call(getDate) === '[object Date]') && !(getDate[Symbol.toStringTag] == 'Date')) {
      const m = getDate.getMonth();
      const seasons = ['winter', 'spring', 'summer', 'autumn'];
      const sObj = {
        11: seasons[0],
        0: seasons[0],
        1: seasons[0],
        2: seasons[1],
        3: seasons[1],
        4: seasons[1],
        5: seasons[2],
        6: seasons[2],
        7: seasons[2],
        8: seasons[3],
        9: seasons[3],
        10: seasons[3]
      };
      return sObj[m];
    } else {
      throw new Error ('Invalid date!');
    }
  } else {
      return 'Unable to determine the time of year!';
  }
}


module.exports = {
  getSeason
};
