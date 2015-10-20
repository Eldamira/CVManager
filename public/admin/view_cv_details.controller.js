(function() {
	'use strict';
	
	angular
		.module('RMS')
		.controller('CVDetailsController', detailsController);
	
	function detailsController ($scope, $http, $stateParams) {
		
		//console.log($scope.post);
		$scope.cvdetails = [];
		var post = $stateParams.post;
		console.log('test');
			$http.post('api/getCVS')
				.success(function (data) {
						console.log(data);				
					for(var i =0;i < data.length;i++){
						console.log(data[i].post);
						if(data[i].post === post){
							$scope.cvdetails.push(data[i]);
						}
					}
				
				});
				
		
	}
})();
