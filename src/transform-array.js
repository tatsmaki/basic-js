const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let a = [];
  for (let i=0; i<arr.length; i++){
    switch(arr[i]) { 
      case '--double-next': 
        if (arr[i+1]!=undefined) 
          a.push(arr[i+1]); 
      break;
      case '--double-prev': 
        if (arr[i-1]!=undefined && arr[i-2]!='--discard-next') 
          a.push(arr[i-1]); 
      break;
      case '--discard-next':
        i++;
      break;
      case '--discard-prev':
        if (arr[i-2]!='--discard-next')
          a.pop();
      break;
      default: 
        a.push(arr[i]);
      break;
    }
  } 
  return a;
};
