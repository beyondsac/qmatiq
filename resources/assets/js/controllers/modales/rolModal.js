qmatiq.controller('rolModal', ['$scope', '$uibModalInstance', 'Item', 'rolModel', 'recursos', 'constante',
	function($scope, $uibModalInstance, Item, rolModel, recursos, constante){
		//variables angularjs
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
					$scope.modalTitle 	= 'Editar Rol';
					$scope.rol.nombre 	= responseNombre.data.nombre;
					$scope.showModal 	= true;
				});
			}else{
				$scope.showModal = true;
			}
		});
		
		//metodos
		angular.extend($scope, {
			changeCheck: function(acceso){
				return recursos.changeCheck(acceso);
			},
			changePermiso: function(key, acceso){
				return $scope.rol.permisos[key]['acceso'] = recursos.changeAcceso(acceso);
			},
			doRoles: function(rolesFom, estadoForm){
				var modulos = rolModel.prepararArrayModulos($scope.rol.permisos);
				//creando data 
				var data = { 
					nombre: 	$scope.rol.nombre,
					cuenta_id: 	constante.cuenta_id,
					modulos: 	modulos
				};

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
				};
			},
			close: function(){
				$uibModalInstance.dismiss('cancel');
			}
		});
	}
]);