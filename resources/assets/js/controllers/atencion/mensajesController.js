qmatiq.controller('mensajesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Mensajes de alerta';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);