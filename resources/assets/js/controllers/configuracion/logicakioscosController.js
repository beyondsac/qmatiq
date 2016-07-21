qmatiq.controller('logicakioscosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Lógica de kioscos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);