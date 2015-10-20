(function() {
	'use strict';
	
	module.exports = function(DBSchema){
	
		return {
			getCVs: function(callback){
				DBSchema.find({}).exec(function(error,cvs) {
					console.log(cvs);
					callback(null,cvs);
				});
			}		
		};	
	};

}());