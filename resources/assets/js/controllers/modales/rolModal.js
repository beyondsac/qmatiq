qmatiq.controller('rolModal', ['$scope', '$uibModalInstance', 'rolModel', 'Item', '$timeout',
	function($scope, $uibModalInstance, rolModel, Item, $timeout){
		//variables
		angular.extend($scope,{
			rol: {},
			permiso: {},
			estadoForm : Item == 0 ? 0 : 1,//if con operador ternario
		});
		//Cargando permisos
		rolModel.getRolPermiso(Item).success(function(responsePermisos){
			$scope.rol.permisos = responsePermisos.data;
			//cargando nombre de rol
			if(Item != 0){ 
				rolModel.getRol(Item).success(function(responseNombre){
					//$timeout(function(){
						$scope.modalTitle = 'Editar Rol';
						$scope.rol.nombre = responseNombre.data.nombre;
						$scope.showModal = true;
					//},3000);
				});
			}else{
				//$timeout(function(){
					$scope.showModal = true;
				//},3000);
			}
		});
		
		//metodos
		angular.extend($scope, {
			changeCheck: function(acceso){
				if(acceso == 0){
					return 'fc_red check_disabled fa-square-o';
				}else{
					return 'fa-check-square-o';
				}
			},
			changePermiso: function(key, acceso){
				if(acceso == 0){
					$scope.rol.permisos[key]['acceso'] = 1;
				}else{
					$scope.rol.permisos[key]['acceso'] = 0;
				}
			},
			doRoles: function(rolesFom, estadoForm){
				var modulos = rolModel.prepararArrayModulos($scope.rol.permisos);
				//creando data 
				var data_before = { 
					nombre: $scope.rol.nombre,
					cuenta_id: 1,
					modulos: modulos
				};

				var data = rolModel.prepararData(data_before);
				//Nuevo Rol
				if(estadoForm == 0){
					rolModel.postRol(data).success(function(response){
						$uibModalInstance.close(true);
					});
				}else{
				//Editar Rol	
					rolModel.putRol(Item, data).success(function(response){
						$uibModalInstance.close(true);
					});
				}
			},
			close: function(){
				$uibModalInstance.dismiss('cancel');
			}
		});
	}
]);