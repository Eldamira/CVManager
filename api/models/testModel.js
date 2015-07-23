(function () {
	'use strict';
	
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;

	var testModel = new Schema({
		value: { type: String }
	});
	
	module.exports = mongoose.model('Test', testModel);
})();
