const { assert: { isFunction } } = require('chai');

const addChild = require("../js/add");

describe("addChild", () => {

	describe("addChild function", () => {
		it("should be a function", () => {
			isFunction(addChild);
		});
	});

});