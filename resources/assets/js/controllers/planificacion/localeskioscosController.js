qmatiq.controller('localeskioscosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Locales / Kioscos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);