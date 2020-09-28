const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   calculateDepth(arr, count = 1, depth=[]) {
    depth.push(count);
    for (var i=0;i<arr.length;i++){
      if (Array.isArray(arr[i])){
        this.calculateDepth(arr[i], count+1, depth);
      }
    }
    return Math.max(...depth);
  }
};
