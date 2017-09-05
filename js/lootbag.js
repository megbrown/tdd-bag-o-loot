"use strict";

const sqlite3 = require('sqlite3').verbose();
const addChild = require('../js/add');
const removeChild = require('../js/remove');
const listChildren = require('../js/ls');
const { argv: [,, ...args] } = process;
const [action, toy, name] = args;
const db = new sqlite3.Database('bag-o-loot.sqlite');

db.run("CREATE TABLE IF NOT EXISTS kidz (name TEXT, toy TEXT, status TEXT)");

if (action == "add") {
	addChild(db, toy, name);
} else if (action == "remove") {
	removeChild(db, toy, name);
} else if (action == "ls") {
	listChildren(db);
} else {
	console.log("hey");
}




