qmatiq.controller('rolModal', ['$scope', '$uibModalInstance', 'UserModulos', 'moduloModel',
	function($scope, $uibModalInstance, UserModulos, moduloModel){
	
		moduloModel.getAll().success(function(response){

			var modulos = response.data;
			var modulos_rol_selected = UserModulos.data.data[0]['sharedModulo'];

		});

		//metodos
		$scope.close = function(){
			$uibModalInstance.dismiss('cancel');
		}

	}
]);