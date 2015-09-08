(function() {
	'use strict';
	
	angular
		.module('RMS')
		.controller('HomeController', homeController);
	
	function homeController ($scope, $http) {
		
		$scope.sayHi = function () {
			$http.get('api/test')
				.success(function (data) {
					$scope.message = data.message;
				})
				.error(function () {
					$scope.message = 'Can\'t say hi.. :\'(';
				});	
		};
	}
})();
