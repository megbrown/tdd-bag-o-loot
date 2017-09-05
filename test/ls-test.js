const { assert: { isFunction } } = require('chai');

const listChildren = require("../js/ls");

describe("listChildren", () => {

	describe("listChildren function", () => {
		it("should be a function", () => {
			isFunction(listChildren);
		});
	});

});