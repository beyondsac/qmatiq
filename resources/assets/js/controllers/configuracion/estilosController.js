qmatiq.controller('estilosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Estilos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);