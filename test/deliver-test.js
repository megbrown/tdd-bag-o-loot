const { assert: { isFunction } } = require('chai');

const deliverStatus = require("../js/deliver");

describe("deliverStatus", () => {

	describe("deliverStatus function", () => {
		it("should be a function", () => {
			isFunction(deliverStatus);
		});
	});

});