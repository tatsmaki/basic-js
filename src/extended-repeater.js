const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let answer=[], repeatTime=0;
  if (str===null)
    str='null';
  if (options.addition===null)
    options.addition='null';
  if (options.repeatTimes===undefined){
    answer.push(str);
    answer.push(options.addition);
  }
  if (options.separator===undefined)
    options.separator='+';
  if (options.additionSeparator===undefined)
    options.additionSeparator='|';
  while (repeatTime < options.repeatTimes) {
    if (repeatTime!==0)
      answer.push(options.separator);
    answer.push(str); 
    for (let additionRepeatTime=0; additionRepeatTime<options.additionRepeatTimes; additionRepeatTime++){
      if (additionRepeatTime!==0)
        answer.push(options.additionSeparator);
      answer.push(options.addition);
    }
    repeatTime++;
  }
  answer=answer.join('');
  return answer;
};
  
