qmatiq.controller('seguridadController', ['$scope', '$rootScope', '$uibModal', '$timeout', 
	function($scope, $rootScope, $uibModal, $timeout){

	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Seguridad';

	//Alertas: Recibe pedido enviado por seguridadConsolaModal.js para mostrar alerta
    $scope.$on('mostrar-alerta', function(event, args) {
    	$scope.mostrarAlerta(args);
	});

	//Metodos
	angular.extend( $scope, {
		showSeguridadConsola: function(){
			var modalInstance = $uibModal.open( $scope.templatesConsola() );
		},
		showSeguridadKiosco: function(){
			var modalInstance = $uibModal.open( $scope.templatesKiosco() );
		},
		setearFrecuencia: function(tipoFrecuencia, dias){
			var respuesta = "";
			//console.log("tipoFrecuencia:" + tipoFrecuencia);
			if (tipoFrecuencia == 0) {
				respuesta = "Nunca actualizar";
			} else if (tipoFrecuencia == 1) {
				respuesta = "Una vez al mes";
			} else if (tipoFrecuencia == 2) {
				respuesta = "Una vez a la semana";
			} else if (tipoFrecuencia == 3) {
				respuesta = "Una vez al día";
			} else if (tipoFrecuencia == 4) {
				respuesta = "Actualizar cada " + dias + " días";
			}
			return respuesta;
		},
		mostrarAlerta: function(args){
			$scope.showAlert = true;
			$scope.alerta	 = 'alert-success text-center';
			$scope.alerts 	 = [{ mensaje: args }];
			//efecto de desvanecimiento
			$timeout(function(){
				$scope.showAlert 	= false;
			}, 1500);
			//elimina la etiqueta
			$timeout (function(){
				$scope.alerts.splice(0,1);
			}, 3000);
		},
		templatesConsola: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/seguridad_consola.html',
				controller: 'seguridadConsolaModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesKiosco: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/seguridad_kiosco.html',
				controller: 'seguridadKioscoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		}
	});
}]);