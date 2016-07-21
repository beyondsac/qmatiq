qmatiq.controller('gruposController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Grupos de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);