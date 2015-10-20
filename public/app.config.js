angular
	.module('RMS')
	.config(config);

function config ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
        .state('home',{
			url: '/',
			templateUrl: '/home/home.html',
			controller: 'HomeController'
        })
        .state('admin',{
			url: '/admin',
			templateUrl: '/admin/admin-panel.html',
			controller: 'AdminController'
        })
		.state('about',{
			url: '/about',
			templateUrl: '/about/about.html'
        })
		.state('viewpost',{
			url: '/viewpost',
			templateUrl: '/admin/view-posts.html',
			controller: 'ViewPostController'
        })
		.state('viewcvdetails',{
			url: '/viewcvdetails',
			templateUrl: '/admin/view-cv-details.html',
			controller: 'CVDetailsController',
			params : { post:null}
        });
}