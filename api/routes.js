(function () {
    'use strict';
	
	var testEndpoint = require('./api_modules/testEndpoint.js');
	
	module.exports = function (app) {
		
		app.get('/api/test', testEndpoint);
		
		
		// Front end
		app.get('*', function (req, res) {
			res.sendFile('index.html', { root: __dirname + '../public/' });
		});
	};
})();
