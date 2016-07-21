qmatiq.controller('homeController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Home';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);