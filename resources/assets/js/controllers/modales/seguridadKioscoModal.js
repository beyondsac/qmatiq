qmatiq.controller('seguridadKioscoModal', ['$scope', '$rootScope', 'segKioscoModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, segKioscoModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		$scope.configuraciones.seguridad_codigo_kiosco_tipo = Item.seguridad_codigo_kiosco_tipo;
		$scope.configuraciones.seguridad_codigo_kiosco_dias = Item.seguridad_codigo_kiosco_dias;
		$scope.configuraciones.seguridad_codigo_kiosco_fecha = Item.seguridad_codigo_kiosco_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doSegKiosco: function(segKioscoForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				var data={
					seguridad_codigo_kiosco_tipo: $scope.configuraciones.seguridad_codigo_kiosco_tipo,
					seguridad_codigo_kiosco_dias: $scope.configuraciones.seguridad_codigo_kiosco_dias,
					seguridad_codigo_kiosco_fecha: $scope.configuraciones.seguridad_codigo_kiosco_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_kiosco_tipo = $scope.configuraciones.seguridad_codigo_kiosco_tipo;
				Item.seguridad_codigo_kiosco_dias = $scope.configuraciones.seguridad_codigo_kiosco_dias;
				Item.seguridad_codigo_kiosco_fecha = $scope.configuraciones.seguridad_codigo_kiosco_fecha;
				//Actualizo la nueva configuración en el API
				segKioscoModel.post(data).success(function(respuesta){
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var mensaje = "Actualización guardada con éxito";
					$rootScope.$broadcast('mostrar-alerta', mensaje);
					$uibModalInstance.dismiss('cancel');
				});
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);