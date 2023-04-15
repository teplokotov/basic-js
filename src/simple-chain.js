const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    value === null ? this.result.push('null') : this.result.push(value);
    return this;
  },
  removeLink(position) {
    if ((position <= this.result.length) && (position > 0)){
      this.result.splice(position - 1, 1);
      return this;
    }
    else {
      this.result.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const resultDecoration = '( ' + this.result.join(' )~~( ') + ' )';
    this.result.length = 0;
    return resultDecoration;
  }
};

module.exports = {
  chainMaker
};
