qmatiq.controller('rolesController', ['$scope', '$uibModal', 'rolModel',
	function($scope, $uibModal, rolModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Roles';
		//Muestra todos los roles
		rolModel.getAll().success(function(response){
			$scope.roles = response.data;
			$scope.showCargando = true;
			$scope.showRoles = true;
		});

		//Metodos
		angular.extend( $scope, {
			editRol: function(id){
				if(id > 9){//roles definidos por defecto temporalmente
					var modalInstance = $uibModal.open( $scope.templates(id) );
					$scope.update(modalInstance);
				}
			},
			newRol: function(){
				var modalInstance = $uibModal.open( $scope.templates(0) );
				$scope.update(modalInstance);
			},
			deleteRol: function(index, id){
				var modalInstance = $uibModal.open( {
					templateUrl: 'templates/modales/delete.html',
					controller : 'deleteModal',
					windowClass: 'modal_delete',
					size: 'sm'
				});

				modalInstance.result.then(function(responseClose){
					rolModel.deleteRol(id).success(function(response){
						//eliminando un registro de la tabla
						$scope.roles.splice(index,1);
					});
				});
			},
			update: function(modalInstance){
				modalInstance.result.then(function(responseClose){
					rolModel.getAll().success(function(response){
						$scope.roles = response.data;
					});
				});
			},
			templates: function(id){
				return templates = {
					templateUrl: 'templates/configuracion/modales/roles.html',
					controller: 'rolModal',
					windowClass: 'modal_roles modal-predeterminado',
					size: 'sm',
					resolve: {
						Item: function(){
							return id;
						}
					}
				}
			}
		});
	}
]);