qmatiq.controller('planificacionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Planificación';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);