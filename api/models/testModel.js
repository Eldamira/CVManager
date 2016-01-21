(function () {
	'use strict';
	
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	//var Schema = mongoose.Schema;

	//var testModel = new Schema({
	//	value: { type: String }
	//});
	
	//module.exports = mongoose.model('Test', testModel);
	var adminSchema = new Schema({
           name: {type: String}
         , email: {type: String}
         , uname: {type: String}
         , password: {type: String}
     });

	 var positionSchema = new Schema({
           pId: ObjectId
         , name: {type: String}
         , commenceDate: { {type: Date, default: Date.now}
         , endDate:  {type: Date, default: Date.now}
     });

    var candidateSchema = new Schema({
           cId: ObjectId
    	 , pId: ObjectId
         , name: {type: String}
         , tokenKey: {type: String}
         , email: {type: String}
         , username: {type: String}
         , password: {type: String}
         , nic: {type: String}
         , address: {type: String}
         , city: {type: String}
         , country: {type: String}
         , tel: {type: String}
         , mobile: {type: String}
         , age: {type: Number}
         , dob: {type: Date, default: Date.now}
         , institute: {type: String}
         , qualifications: {type: String}
         , achivements: {type: String}
         , cvPath: {type: String}
         , isParticipated: Boolean
    });   

    var xianSchema = new Schema({
           xId: ObjectId
         , interviewId: {type: Number}
         , name: {type: String}
         , username: {type: String}
         , password: {type: String}
         
    });

    var interviewSchema = new Schema({
    	   interviewId: ObjectId
    	 , cID: ObjectId  
         , venue: {type: String} 
         , date: {type: Date, default: Date.now}
         , startTime: {type: Date, default: Date.now}
         , endTime: {type: String}
         , softSkills_Marks: {type: Number}
         , softSkills_comments: {type: String}
         , techSkills_Marks: {type: Number}
         , techSkills_comment: {type: String}
         , status: {type: String}     
    });

    var recomendationsSchema = new Schema({
           recId: ObjectId
         , tokenKey: {type: String}
         , recommendMessage: {type: String}
         , recommendOn: {type: String}

    });

   module.exports = mongoose.model('Admin', adminSchema);
   module.exports = mongoose.model('Position', positionSchema);
   module.exports = mongoose.model('Candidate', candidateSchema);
   module.exports = mongoose.model('Xian', xianSchema);
   module.exports = mongoose.model('Interview', interviewSchema);
   module.exports = mongoose.model('Recommends', recomendationsSchema);

})();
