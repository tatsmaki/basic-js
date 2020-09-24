const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let type = ['number', 'function', 'object', 'array', 'string'];
  let str = isNaN(Date.parse(date)) ? (type.indexOf(typeof date) >= 0 ? 'Error' : 'Unable to determine the time of year!') : date.getUTCMonth();
  if (str==0 || str==1 || str==11) return 'winter';
  if (str==2 || str==3 || str==4) return 'spring';
  if (str==5 || str==6 || str==7) return 'summer';   
  if (str==8 || str==9 || str==10) return 'autumn';
  if (str='error') throw str;
  return str;
};
