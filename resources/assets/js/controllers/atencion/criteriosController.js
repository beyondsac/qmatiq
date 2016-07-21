qmatiq.controller('criteriosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Criterios de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);