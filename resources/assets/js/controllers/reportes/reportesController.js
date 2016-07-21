qmatiq.controller('reportesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Reportes';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);