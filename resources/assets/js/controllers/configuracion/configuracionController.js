qmatiq.controller('configuracionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Configuración';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);