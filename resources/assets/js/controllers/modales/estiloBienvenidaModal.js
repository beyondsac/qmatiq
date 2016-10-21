qmatiq.controller('estiloBienvenidaModal', ['$scope', '$rootScope', 'estBienvenidaModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estBienvenidaModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		$scope.includeImagenes = "templates/configuracion/modales/bienvenida/imagenes.html";
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstBienvenida: function(estBienvenidaForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
					seguridad_codigo_autenticacion_tipo: $scope.configuraciones.seguridad_codigo_autenticacion_tipo,
					seguridad_codigo_autenticacion_dias: $scope.configuraciones.seguridad_codigo_autenticacion_dias,
					seguridad_codigo_autenticacion_fecha: $scope.configuraciones.seguridad_codigo_autenticacion_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_autenticacion_tipo = $scope.configuraciones.seguridad_codigo_autenticacion_tipo;
				Item.seguridad_codigo_autenticacion_dias = $scope.configuraciones.seguridad_codigo_autenticacion_dias;
				Item.seguridad_codigo_autenticacion_fecha = $scope.configuraciones.seguridad_codigo_autenticacion_fecha;
				//Actualizo la nueva configuración en el API
				segConsolaModel.post(data).success(function(respuesta){
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var mensaje = "Actualización guardada con éxito";
					$rootScope.$broadcast('mostrar-alerta', mensaje);
					$uibModalInstance.dismiss('cancel');
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);