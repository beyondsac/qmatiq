qmatiq.controller('peticionesController', ['$scope', '$rootScope', '$uibModal', '$timeout', 
	function($scope, $rootScope, $uibModal, $timeout){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Peticiones de acceso';
	//quitando el show Cargando
	$scope.showCargando = true;

	//Alertas: Recibe pedido enviado por seguridadConsolaModal.js para mostrar alerta
    $scope.$on('mostrar-alerta', function(event, type, message) {
    	$scope.mostrarAlerta(type, message);
	});

	//Metodos
	angular.extend( $scope, {
		showPeticionesDeAcceso: function(){
			var modalInstance = $uibModal.open( $scope.templates() );
		},
		mostrarAlerta: function(type, message){
			$scope.showAlert = true;
			$scope.alerta	 = type + ' text-center';
			$scope.alerts 	 = [{ mensaje: message }];
			//efecto de desvanecimiento
			$timeout(function(){
				$scope.showAlert 	= false;
			}, 1500);
			//elimina la etiqueta
			$timeout (function(){
				$scope.alerts.splice(0,1);
			}, 3000);
		},
		templates: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/peticiones_de_acceso.html',
				controller: 'peticionesDeAccesoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog-peticiones',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		}
	});
}]);