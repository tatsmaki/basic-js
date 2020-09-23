const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  let new_arr=arr;
  for (let i=0; i<new_arr.length; i++){
    switch(new_arr[i]) { 
      case '--double-next': new_arr.splice(i,1,new_arr[i+1]); break;
      case '--double-prev': new_arr.splice(i,1,new_arr[i-1]); break;
      default: break;
    }
  } 
  for (let i=0; i<new_arr.length; i++){
    switch(new_arr[i]) { 
      case '--discard-next': new_arr.splice(i+1,1); break;
      case '--discard-prev': new_arr.splice(i-1,1); break;
      default: break;
    }
  }
  console.log(new_arr);
  return arr;
};
