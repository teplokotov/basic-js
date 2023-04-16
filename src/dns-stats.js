const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  let arr = [];
  let domain;
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.');
    domain = '';
    for (let k = arr.length - 1; k >= 0 ; k--) {
      domain += '.' + arr[k];
      result[domain] !== undefined ? result[domain] += 1 : result[domain] = 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
