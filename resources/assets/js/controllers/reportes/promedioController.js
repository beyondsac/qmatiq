qmatiq.controller('promedioController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Promedio de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);