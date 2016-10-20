//TODO: peticionesModel TODAVIA NO JALA LA DATA CORRECTA
qmatiq.controller('peticionesDeAccesoModal', ['$scope', '$rootScope', 'peticionesModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, peticionesModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});

		//Acciones disponibles en "Seleccionar acción"
		$scope.acciones = [{
			value: 'aceptar',
			label: 'Aceptar petición',
			selected: 'selected'
		}, {
			value: 'rechazar',
			label: 'Rechazar petición'
		}];
		$scope.listaAcciones = $scope.acciones[0];//Acetar petición aparecerá como preseleccionado

		//Instanciando variables
		//$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		//$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		//$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doPeticiones: function(peticionesForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*
				var data={
					seguridad_codigo_autenticacion_tipo: $scope.configuraciones.seguridad_codigo_autenticacion_tipo,
					seguridad_codigo_autenticacion_dias: $scope.configuraciones.seguridad_codigo_autenticacion_dias,
					seguridad_codigo_autenticacion_fecha: $scope.configuraciones.seguridad_codigo_autenticacion_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_autenticacion_tipo = $scope.configuraciones.seguridad_codigo_autenticacion_tipo;
				Item.seguridad_codigo_autenticacion_dias = $scope.configuraciones.seguridad_codigo_autenticacion_dias;
				Item.seguridad_codigo_autenticacion_fecha = $scope.configuraciones.seguridad_codigo_autenticacion_fecha;
				//Actualizo la nueva configuración en el API
				peticionesModel.post(data).success(function(respuesta){*/
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					//var aceptar = true;//TODO: ESTA VARIABLE DEBE TOMAR EL VALOR SELECCIONADO POR EL USUARIO
					var tipo;
					var mensaje;
					if ($scope.listaAcciones.value == "aceptar") {
						tipo = "alert-success";
						mensaje = "Petición de acceso aceptada";
					} else {
						tipo = "alert-danger";
						mensaje = "Petición de acceso rechazada";
					}
					$rootScope.$broadcast('mostrar-alerta', tipo, mensaje);
					$uibModalInstance.dismiss('cancel');
				/*});
				*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);