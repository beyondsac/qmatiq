qmatiq.controller('rolesController', ['$scope', '$uibModal', 'rolModel',
	function($scope, $uibModal, rolModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Roles';
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
					size: 'md',
					resolve: {
						Item: function(){
							return 'rol';
						}
					}
				});

				modalInstance.result.then(function(responseClose){
					rolModel.deleteRol(id).success(function(response){
						$scope.$parent.roles.splice(index,1);
					});
				});
			},
			update: function(modalInstance){
				modalInstance.result.then(function(responseClose){
					rolModel.getAll().success(function(response){
						$scope.$parent.roles = response.data;
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