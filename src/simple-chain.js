const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '()') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position > 0 && position<=this.chain.length && !isNaN(position)) {
      this.chain.splice(position-1,1)
      return this;
    }
    else {
      this.chain=[];
      throw new Error();
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let string = "";
    //this.chain.forEach ( link => {
    for (let link of this.chain) {
      string += '( ' + this.chain[i] + ' )~~';
    }
    this.chain = [];
    return string.slice(0, -2);
  }

module.exports = chainMaker;
