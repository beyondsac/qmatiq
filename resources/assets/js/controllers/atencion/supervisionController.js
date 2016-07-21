qmatiq.controller('supervisionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Supervisión';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);