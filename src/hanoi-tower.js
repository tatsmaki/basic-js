const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let object={};
  object.turns=Math.pow(2,disksNumber)-1;
  object.seconds=Math.floor((Math.pow(2,disksNumber)-1)/turnsSpeed*3600);
  return object;
};
