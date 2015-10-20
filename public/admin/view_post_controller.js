(function() {
	'use strict';
angular
    .module('RMS')
    .controller('ViewPostController',viewPostController);

	function viewPostController($scope,$http){
		$http.post('api/getCVS')
			.success(function (data) {
							
			var posts = [];
			for(var i=0;i<data.length;i++){
				if(posts[data[i].post] === undefined){
					posts[data[i].post] = 1;
				}else{
					posts[data[i].post] = posts[data[i].post] + 1;
				}				
			}
			$scope.cvs = [];
			var x =0;
			for(var c in posts){
				if(x < data.length){
					$scope.cvs.push({
						post:c,
						amount:posts[c],
						strt_date:data[x].strt_date,
						end_date:data[x].end_date	
					});
					x++;
				}
			}
				
		});
		
	}
}());