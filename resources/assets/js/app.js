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
		//Planificacion
		$routeProvider.when('/planificacion',{
			templateUrl : 'templates/planificacion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/planificacion/grupo_de_atencion',{
			templateUrl : 'templates/planificacion/grupo_de_atencion.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/planificacion/clientes_y_jerarquias',{
			templateUrl : 'templates/planificacion/clientes_y_jerarquias.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/planificacion/locales_kioscos',{
			templateUrl : 'templates/planificacion/locales_kioscos.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/planificacion/logica',{
			templateUrl : 'templates/planificacion/logica.html',
			controller: 'userController',
			authenticated: true
		});
		//Video
		$routeProvider.when('/video',{
			templateUrl : 'templates/video/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/video/playlist_locales',{
			templateUrl : 'templates/video/playlist_locales.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/video/playlist_de_youtube',{
			templateUrl : 'templates/video/playlist_de_youtube.html',
			controller: 'userController',
			authenticated: true
		});
		//Atencion
		$routeProvider.when('/atencion',{
			templateUrl : 'templates/atencion/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/atencion/modulo_de_atencion',{
			templateUrl : 'templates/atencion/modulo_de_atencion.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/atencion/supervision',{
			templateUrl : 'templates/atencion/supervision.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/atencion/criterios_de_atencion',{
			templateUrl : 'templates/atencion/criterios_de_atencion.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/atencion/mensajes_de_alerta',{
			templateUrl : 'templates/atencion/mensajes_de_alerta.html',
			controller: 'userController',
			authenticated: true
		});
		//reportes
		$routeProvider.when('/reportes',{
			templateUrl : 'templates/reportes/index.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/reportes/alcance_de_turnos',{
			templateUrl : 'templates/reportes/alcance_de_turnos.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/reportes/origen_de_turnos',{
			templateUrl : 'templates/reportes/origen_de_turnos.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/reportes/promedio_de_atencion',{
			templateUrl : 'templates/reportes/promedio_de_atencion.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/reportes/frecuencia_por_tramite',{
			templateUrl : 'templates/reportes/frecuencia_por_tramite.html',
			controller: 'userController',
			authenticated: true
		});

		$routeProvider.when('/reportes/saturacion',{
			templateUrl : 'templates/reportes/saturacion.html',
			controller: 'userController',
			authenticated: true
		});
		//Otros
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