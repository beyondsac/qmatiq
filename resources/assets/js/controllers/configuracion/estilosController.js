qmatiq.controller('estilosController', ['$scope', '$uibModal', function($scope, $uibModal){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Estilos';
	//Metodos
	angular.extend( $scope, {
		showConsole: function(){
			var modalInstance = $uibModal.open( $scope.templates(0) );
		},
		templates: function(id){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_consola.html',
				controller: 'estiloConsolaModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return id;
					}
				}
			}
		}
	});
}]);