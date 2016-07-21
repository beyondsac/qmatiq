qmatiq.controller('logicaController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Lógica';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);