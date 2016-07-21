qmatiq.controller('origenController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Origen de los turnos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);