qmatiq.controller('globalController', ['$scope', '$location', function($scope, $location){
	$scope.global = {};
	$scope.global.navHead = 'templates/partials/nav_header.html';
	$scope.global.navUrl = 'templates/partials/nav_sidebar.html';
	$scope.global.loading = 'templates/partials/cargando.html';
	//cambiando encabezados de paginas
	$scope.nameProject = 'Qmatiq - ';
	
}]);