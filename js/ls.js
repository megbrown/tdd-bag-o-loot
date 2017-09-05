"use strict";

module.exports = listChildren;

function listChildren(db) {
	db.each('SELECT * FROM kidz', (err, {name}) => {
		if (err) {
			return console.log(err.toString());
		}
		console.log(`${name}`);
	});
};