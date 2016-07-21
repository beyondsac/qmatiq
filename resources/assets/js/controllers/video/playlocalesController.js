qmatiq.controller('playlocalesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Playlist locales';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);