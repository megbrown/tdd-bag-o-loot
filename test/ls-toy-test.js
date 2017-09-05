const { assert: { isFunction } } = require('chai');

const listToys = require("../js/ls-toy");

describe("listToys", () => {

	describe("listToys function", () => {
		it("should be a function", () => {
			isFunction(listToys);
		});
	});

});