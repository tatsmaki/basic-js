const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  console.log(arr);
  let orr=arr;
  for (let i=0; i<orr.length; i++){
    switch(orr[i]) { 
      case '--double-next': if (orr[i+1]!=undefined) orr.splice(i,1,orr[i+1]); else orr.splice(i,1); break;
      case '--double-prev': if (orr[i-1]!=undefined && orr[i-2]!='--discard-next') orr.splice(i,1,orr[i-1]); else orr.splice(i,1); break;
      default: break;
    }
  } 
 
  for (let i=0; i<orr.length; i++){
    switch(orr[i]) { 
      case '--discard-next': if (orr[i+1]!=undefined && orr[i+2]!='--discard-prev') orr.splice(i,2); else orr.splice(i,1); break;
      case '--discard-prev': if (orr[i-1]!=undefined && orr[i-2]!='--discard-next') orr.splice(i-1,2); else orr.splice(i,1); break;
      default: break;
    }
  }
  console.log(orr);
  return orr;
};
