qmatiq.controller('atencionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);