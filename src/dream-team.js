const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	members.sort();
	let team='', j=0;;
	for(let i=0; i<members.length;i++)
				team+=members[i][0];
	return team.toUpperCase();
};
