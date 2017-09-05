"use strict";

module.exports = deliver;

function deliver(db, name) {
	db.run(`update kidz SET status = "false" WHERE name is "${name}"`);
}