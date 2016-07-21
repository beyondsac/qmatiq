qmatiq.controller('peticionesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Peticiones de acceso';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);