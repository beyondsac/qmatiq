qmatiq.controller('usuariosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Usuarios';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);