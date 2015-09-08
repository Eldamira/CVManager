describe("Node Pre-Requistes", function () {
	it("define is not defined", function () {
		var val = typeof require;
		expect(val == 'undefined').toBe(false);
	});
});

describe("Sample TestEndPoint Test Suite", function () {
	var testEndPoint = require("../../api/api_modules/testEndpoint.js")();
	it("Checking for test method definition.", function () {
		expect(testEndPoint, testEndPoint.testReturn).toBeDefined();
	});
	it("Checking the return value", function () {
		//var properValue = (testEndPoint.testReturn() === 'Test Value');
		expect(testEndPoint.testReturn()).toBe(15);
	});
});

	/*var testPoint;
module.exports = function (testEndpoint) {
		testPoint = testEndpoint;
	};

	describe("Sample TestEndPoint Test Suite", function () {
	//var testEndPoint = require("../../api/api_modules/testEndpoint.js");
	it("Checking for test method definition.", function () {
		expect(testPoint, testPoint.testReturn).toBeDefined();
	});
	it("Checking the return value", function () {
		//var properValue = (testEndPoint.testReturn() === 'Test Value');
		expect(testPoint.testReturn()).toBe(15);
	});
});*/



