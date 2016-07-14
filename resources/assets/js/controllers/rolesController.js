qmatiq.controller('rolesController', ['$scope', '$uibModal', 'rolModel', '$timeout',
	function($scope, $uibModal, rolModel, $timeout){
		//Muestra todos los roles
		rolModel.getAll().success(function(response){
			$scope.roles = response.data;
			$scope.showRoles = true;
		});

		//Metodos
		angular.extend( $scope, {
			editRol: function(id){
				console.log(id);
				var modalInstance = $uibModal.open({
					templateUrl: 'templates/configuracion/modales/roles.html',
					controller: 'rolModal',
					windowClass: 'modal_roles modal-predeterminado',
					size: 'sm',
					resolve: {
						UserModulos: function(){
							return rolModel.getRolSelect(id);
						}
					}
				});
			},
		});
	}
]);