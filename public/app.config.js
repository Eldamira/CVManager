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
		.state('about',{
			url: '/about',
			templateUrl: '/about/about.html'
        });
}