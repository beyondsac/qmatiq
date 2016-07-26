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
				listServices.getUsuarioAll()
			]
		).then(function(response){
			$scope.roles 		= response[0].data.data;
			$scope.usuarios 	= response[1].data.data;
			$scope.showCargando = true;
			//$scope.showRoles = true;
		});
	}
]);