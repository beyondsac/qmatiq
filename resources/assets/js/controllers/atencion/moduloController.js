qmatiq.controller('moduloController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Módulo de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);