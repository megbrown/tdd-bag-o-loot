const { assert: { isFunction } } = require('chai');

const removeChild = require("../js/remove");

describe("removeChild", () => {

	describe("removeChild function", () => {
		it("should be a function", () => {
			isFunction(removeChild);
		});
	});

});