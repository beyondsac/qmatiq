qmatiq.controller('videoController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Video';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);