var request = require('request');
var dbDAO = require('../../api/DAO/db.dao.js')();
//var router = require('../../api/routes.js')();
var testEndPoint = require("../../api/api_modules/testEndpoint.js")();
var requestURL = 'http://localhost:8070';

describe("Node Pre-Requistes", function () {
	it("define is not defined", function () {
		var val = typeof require;
		expect(val == 'undefined').toBe(false);
	});
});

describe("Sample TestEndPoint Test Suite", function () {
	
	it("Checking for test method definition.", function () {
		expect(testEndPoint, testEndPoint.testReturn).toBeDefined();
	});
	it("Checking the return value", function () {
		//var properValue = (testEndPoint.testReturn() === 'Test Value');
		expect(testEndPoint.testReturn()).toBe(15);
	});
});
describe("Router Test Suite",function(){
	it('Server should respond with Hi machan response from /api/test',function(done){
		request.get(requestURL+'/api/test', function(error,response,body){
			expect(body).toEqual('{"message":"Hi Machan :)"}');			
			done();
		});
	},1000);
	it('Server should return data from the DB to /api/getCVS',function(done2){
		request.post(requestURL+'/api/getCVS', function(error,response,body){
			console.log(body);
			expect(body).toContain('id');		
			done2();
		});
	},1000);

});
describe("db.dao Test Suite",function(){
	
	it("Checking for getCVs method definition", function (){
		expect(dbDAO,dbDAO.getCVs).toBeDefined();
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



