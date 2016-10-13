qmatiq.controller('seguridadController', ['$scope', '$uibModal', function($scope, $uibModal){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Seguridad';
	//Metodos
	angular.extend( $scope, {
		showSeguridadConsola: function(){
			var modalInstance = $uibModal.open( $scope.templates(0) );
			//console.log("HOLA");
		},
		templates: function(id){
			return templates = {
				templateUrl: 'templates/configuracion/modales/seguridad_consola.html',
				controller: 'seguridadConsolaModal',
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