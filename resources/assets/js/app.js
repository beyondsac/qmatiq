var qmatiq = angular.module('qmatiq',['ngRoute','ngCookies']);

qmatiq.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl : 'templates/users/login.html',
			controller: 'userController',
		});

		$routeProvider.when('/dashboard',{
			templateUrl : 'templates/users/dashboard.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/logout',{
			templateUrl : 'templates/users/logout.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.otherwise('/');
	}
]);

qmatiq.run(['$rootScope', '$location', 'userModel', 
	function($rootScope, $location, userModel){
		$rootScope.$on('$routeChangeStart',
			function(event, next, current){
				if(next.$$route.authenticated){
					if(!userModel.getAuthStatus()){
						$location.path('/');
					}
				}
				
				if(next.$$route.originalPath == '/'){
					if(userModel.getAuthStatus()){
						$location.path(current.$$route.originalPath);
					}
				}

				if(next.$$route.originalPath == ''){
					if(userModel.getAuthStatus()){
						$location.path('/dashboard');
					}else{
						$location.path('/');
					}
				}
			})
	}
])