"use strict";

module.exports = listToys;

function listToys(db, name) {
	db.each(`SELECT toy FROM kidz WHERE name = "${name}"`, (err, {toy}) => {
		if (err) {
			return console.log(err.toString());
		} else {
			console.log(`${toy}`);
		}
	});
}