/*(function () {
    'use strict';
	
	var testEndpoint = require('./api_modules/testEndpoint.js');
	
	module.exports = function (app) {
		
		app.get('/api/test', testEndpoint);
		
		
		// Front end
		app.get('*', function (req, res) {
			res.sendFile('index.html', { root: __dirname + '/public/' });
		});
	};
})();*/

(function () {
	'use strict';
	module.exports = function (express, testEndpoint, DBdao) {

		var router = express.Router();

		router.route('/test').get(function (req, res) {

			testEndpoint.test(req.query, function (result) {
				res.send(result);
			});
		});
		
		router.route('/getCVS').post(function(req,res) {
			DBdao.getCVs(function(error,result){
				res.send(result);			
			});
		});
		
		return router;
	};

})();
