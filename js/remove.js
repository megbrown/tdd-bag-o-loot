"use strict";

module.exports = removeChild;

function removeChild(db, toy, name) {
	db.run(`DELETE FROM kidz WHERE name is "${name}" AND toy is "${toy}"`);
}