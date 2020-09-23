const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let team='';
	members.forEach (member => {
		if (typeof member == 'string'){
			let i=0;
			while (member[i]==' ') i++;
			team+=member[i];
		}
	})
	team=team.toUpperCase().split('').sort().join('');
	return team;
};
