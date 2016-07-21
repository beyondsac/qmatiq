qmatiq.controller('frecuenciaController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Frecuencia por trámite';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);