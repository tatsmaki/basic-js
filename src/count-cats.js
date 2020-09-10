const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	let cats=0;
	
	backyard.map( row => row.map( cell => cell=='^^' ? cats++ : cats=cats ) );
	
    //for(let i=0;i<backyard.length;i++)
		//for(let j=0;j<backyard[i].length;j++)
			//if(backyard[i][j]=='^^')
				//cats++;
	return cats;
};
