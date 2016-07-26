qmatiq.controller('usuariosController', ['$scope', '$uibModal', 'usuarioModel', 
	function($scope, $uibModal, usuarioModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Usuarios';//Metodos

		angular.extend( $scope, {
			edit: function(id){
				if(id != 3){
					var modalInstance = $uibModal.open( $scope.templates(id) );
					$scope.update(modalInstance);
				}
			},
			new: function(){
				var modalInstance = $uibModal.open( $scope.templates(0) );
				$scope.update(modalInstance);
			},
			delete: function(index, id){
				var modalInstance = $uibModal.open( {
					templateUrl: 'templates/modales/delete.html',
					controller : 'deleteModal',
					windowClass: 'modal_delete',
					size: 'md',
					resolve: {
						Item: function(){
							return 'usuario';
						}
					}
				});

				modalInstance.result.then(function(responseClose){
					usuarioModel.delete(id).success(function(response){
						$scope.$parent.usuarios.splice(index,1);
					});
				});
			},
			update: function(modalInstance){
				modalInstance.result.then(function(responseClose){
					usuarioModel.getAll().success(function(response){
						$scope.$parent.usuarios = response.data;
					});
				});
			},
			templates: function(id){
				return templates = {
					templateUrl: 'templates/configuracion/modales/usuarios.html',
					controller: 'usuarioModal',
					windowClass: 'modal_listas_check modal-predeterminado',
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