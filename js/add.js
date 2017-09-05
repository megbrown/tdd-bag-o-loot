"use strict";

module.exports = addChild;

function addChild(db, toy, name) {
	db.run(`INSERT INTO kidz VALUES("${name}", "${toy}", "true")`);
}