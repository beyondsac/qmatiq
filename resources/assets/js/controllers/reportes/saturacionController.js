qmatiq.controller('saturacionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Saturación';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);