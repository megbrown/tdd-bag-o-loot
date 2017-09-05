"use strict";

module.exports = listToys;

function listToys(db, toy) {
	db.each(`SELECT name FROM kidz WHERE toy = "${toy}"`, (err, {name}) => {
		if (err) {
			return console.log(err.toString());
		} else {
			console.log(`${name}`);
		}
	});
}