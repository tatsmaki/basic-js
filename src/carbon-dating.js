const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if(typeof sampleActivity == "string"){
		sampleActivity = parseFloat(sampleActivity);
		if(MODERN_ACTIVITY > sampleActivity && sampleActivity > 0)
      			return Math.ceil(HALF_LIFE_PERIOD/0.693 * Math.log(MODERN_ACTIVITY / sampleActivity));
  	}
  	return false;
};
