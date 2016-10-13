qmatiq.controller('logicakioscosController', ['$scope', 'configuracionModel', 'recursos', '$timeout', function($scope, configuracionModel, recursos, $timeout){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Lógica de kioscos';
	
	// metodos
	angular.extend($scope, {
		changeCheck: function(acceso){
			return recursos.changeCheck(acceso);
		},
		changeLectura: function(key_obj, acceso){
			return $scope.$parent.configuraciones[key_obj] = recursos.changeAcceso(acceso);
		},
		doLogicaK: function(LogicaKForm){
			configuracionModel.post($scope.$parent.configuraciones).success(function(){
				$scope.showAlert = true;
				$scope.alerta	 = 'alert-success text-center';
				$scope.alerts 	 = [{ mensaje: 'DATOS GUARDADOS' }];
				//efecto de desvanecimiento
				$timeout(function(){
					$scope.showAlert 	= false;
				}, 1000);
				//elimina la etiqueta
				$timeout (function(){
					$scope.alerts.splice(0,1);
				}, 3000);
			});
		}
	});

}]);