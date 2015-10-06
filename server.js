/*global require,global,console,__dirname,module*/

(function() {
	'use strict';

	var CoolBeans = require('CoolBeans');
	global.DIRegistry = new CoolBeans('./api/utils/diregistry.util.json');

	var http = global.DIRegistry.get('http');
	var bodyParser = global.DIRegistry.get('bodyParser');
	var appConfigs = global.DIRegistry.get('AppConfigs');
	var mongoose = global.DIRegistry.get('mongoose');
	var express = global.DIRegistry.get('express');
	var database = global.DIRegistry.get('database');
	var app = global.DIRegistry.get('app');
	var appRoutes = global.DIRegistry.get('appRoutes');

	//create server
	var server = http.createServer(app);

	//keep tcp connection alive
	var  dbOptions = {
		server: {
			socketOptions:{
				keepAlive:1
			}
		}
	};

	//connect to mongo db
	var connectDB = function() {
		mongoose.connect(database.url, dbOptions);
	};
	connectDB();

	mongoose.connection.on('connected', function() {
		console.log('Connected to mongo db');
	});

	//configure body-parser
	app.use(bodyParser.json({extended:true, limit: '50mb'}));
	app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));

	//API routing
	app.use('/api/', appRoutes);
	

	//public views routing
	app.use(express.static(__dirname + '/public'));

	//start server
	module.exports = app;
	server.listen(appConfigs.serverPort, function() {
		console.log('CV Manager App started on port : ' + appConfigs.serverPort);
	});
}());
