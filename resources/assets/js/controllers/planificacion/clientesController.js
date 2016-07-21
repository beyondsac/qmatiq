qmatiq.controller('clientesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Clientes y Jerarquías';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);