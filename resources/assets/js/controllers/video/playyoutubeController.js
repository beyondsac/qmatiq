qmatiq.controller('playyoutubeController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Playlist de Youtube';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);