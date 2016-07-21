qmatiq.controller('seguridadController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Seguridad';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);