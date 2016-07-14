qmatiq.controller('rolesController', ['$scope', '$uibModal', 'rolModel',
	function($scope, $uibModal, rolModel ){
		//Muestra todos los roles
		rolModel.getAllRoles().success(function(response){
			$scope.roles = response.data;
			$scope.showRoles = true;
		});

		//Metodos
		angular.extend( $scope, {
			editModal: function(){
				var modalInstance = $uibModal.open({
					templateUrl: 'templates/configuracion/modales/roles.html',
					controller: 'rolModal',
					windowClass: 'modal_roles modal-predeterminado',
					size: 'sm',
					resolve: {
						Modulos : function(){
							return 'hola';
						},
					}
				});
			},
		});
	}
]);