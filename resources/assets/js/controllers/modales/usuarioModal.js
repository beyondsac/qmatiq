qmatiq.controller('usuarioModal', ['$scope', '$uibModalInstance', 'Item', 'usuarioModel', 'rolModel', 'recursos', 'constante',
	function($scope, $uibModalInstance, Item, usuarioModel, rolModel, recursos, constante){
		//variables angularjs
		angular.extend($scope,{
			user: {},
			estadoForm : Item == 0 ? 0 : 1,//if con operador ternario
		});
		//Cargando roles
		rolModel.getAll().success(function(response){
			$scope.roles = response.data;
			//cargando Usuario
			if(Item != 0){ 
				usuarioModel.get(Item).success(function(response){
					$scope.modalTitle 			= 'Editar Usuario';
					$scope.user.nombre			= response.data[0]['nombre'];
					$scope.user.email_trabajo	= response.data[0]['email_trabajo'];
					$scope.selectedItem 		= response.data[0]['rol_id'];
					//carga locales de usuario
					usuarioModel.getUsuariosLocales(Item).success(function(responseLocal){
						$scope.locales 		= responseLocal.data;
						$scope.showModal 	= true;
					});
				});
			}else{
				usuarioModel.getUsuariosLocales(Item).success(function(responseLocal){
					$scope.locales 		= responseLocal.data;
					$scope.showModal 	= true;
				});
			}
		});
			
		//metodos
		angular.extend($scope, {
			changeSelect: function(){
				return $scope.selectedItem;
			},
			changeCheck: function(acceso){
				return recursos.changeCheck(acceso);
			},
			changeAcceso: function(key, acceso){
				return $scope.locales[key]['acceso'] = recursos.changeAcceso(acceso);
			},
			doUsuarios: function(usuarioForm, estadoForm){
				var locales = usuarioModel.prepararArrayLocales($scope.locales);

				var data = {
					nombre: 		$scope.user.nombre,
					email_trabajo: 	$scope.user.email_trabajo,
					rol_id: 		$scope.selectedItem,
					sharedLocal: 	locales
				};
				//Nuevo usuario
				if(estadoForm == 0){
					data.cuenta_id = constante.cuenta_id;
					usuarioModel.post(data).success(function(response){
						$uibModalInstance.close(true);
					});
				}else{
				//Editar usuario	
					usuarioModel.put(Item, data).success(function(response){
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