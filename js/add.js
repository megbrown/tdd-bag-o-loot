"use strict";

module.exports = addChild;

function addChild(db, toy, name) {
	console.log("add", toy, name);
	db.run(`INSERT INTO kidz VALUES("${name}", "${toy}", "true")`);
}