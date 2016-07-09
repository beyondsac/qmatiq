var qmatiq = angular.module('qmatiq',['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize', 'ui.bootstrap']);

qmatiq.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		$routeProvider.when('/',{
			templateUrl : 'templates/users/login.html',
			controller: 'userController',
		});

		$routeProvider.when('/home',{
			templateUrl : 'templates/users/home.html',
			controller: 'userController',
			authenticated: true
		});
		//Configuración
		$routeProvider.when('/configuracion',{
			templateUrl : 'templates/configuracion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/roles',{
			templateUrl : 'templates/configuracion/roles.html',
			controller: 'rolesController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/usuarios',{
			templateUrl : 'templates/configuracion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/logica_de_kioscos',{
			templateUrl : 'templates/configuracion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/estilos',{
			templateUrl : 'templates/configuracion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/seguridad',{
			templateUrl : 'templates/configuracion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/configuracion/peticiones_de_acceso',{
			templateUrl : 'templates/configuracion/index.html',
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
						$location.path('/home');
					}else{
						$location.path('/');
					}
				}
			})
	}
]);

qmatiq.constant('URL', 'http://api.qmatiq.piensamasalla.com/v1/');
//# sourceMappingURL=app.js.map
