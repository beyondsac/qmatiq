qmatiq.controller('globalController', ['$scope', '$location', '$q', 'listServices',
	function($scope, $location, $q, listServices){
		$scope.global = {};
		$scope.global.navHead 	= 'templates/partials/nav_header.html';
		$scope.global.navUrl 	= 'templates/partials/nav_sidebar.html';
		$scope.global.loading 	= 'templates/partials/cargando.html';
		//cambiando encabezados de paginas
		$scope.nameProject = 'Qmatiq - ';
		//Cargando todas las listas
		$q.all(
			[
				listServices.getRolAll(),
				listServices.getUsuarioAll(),
				listServices.getLocalAll(),
				listServices.getConfiguracionAll(),
			]
		).then(function(response){
			$scope.roles 				= response[0].data.data;
			$scope.usuarios 			= response[1].data.data;
			$scope.locales 				= response[2].data.data;
			$scope.configuraciones 		= response[3].data.data;
			//combobox locales - usuarios
			$scope.selectedLocal = 0;
			//deshabilitando cargadores
			$scope.cargando 				= 'Cargando ...';
			$scope.showCargando 			= true;
			$scope.showCargandoUsuarios 	= true;
		});
	}
]);