(function() {
	'use strict';
	
	module.exports = function(mongoose){
		var dbSchema = new mongoose.Schema({
			post: {type:String},
			amount: {type:Number},
			strt_date: {type:String},
			end_date: {type:String},
			name: {type:String},
			university: {type:String},
			degree: {type:String},
			email: {type:String},
			contact_no: {type:String}
		});
		
		return mongoose.model('Data',dbSchema,'data');
	};
}());
