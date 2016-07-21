qmatiq.controller('alcanceController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Alcance de turnos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);