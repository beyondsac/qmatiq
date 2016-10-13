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
qmatiq.controller('estiloConsolaModal', [
	'$scope',
	'$uibModalInstance', 
	'Item',
	'configuracionModel',
	'upload',
	'recursos',
	'constante',
	'$q', function(
		$scope, 
		$uibModalInstance, 
		Item,
		configuracionModel,
		upload,
		recursos, 
		constante,
		$q){
		//variables angularjs
		angular.extend( $scope, {
			dir: {},
			configuracion: Item,
			minicolorsCustomSettings: recursos.minicolors_predeterminado,
		});
		//Cargando datos
		configuracionModel.getAll().success(function(e){ 
			$scope.configuracion.estilo_consola_principal_fondo_color 	= e.data.estilo_consola_principal_fondo_color;
			$scope.configuracion.estilo_consola_principal_texto_color 	= e.data.estilo_consola_principal_texto_color;
			$scope.configuracion.estilo_consola_secundario_fondo_color 	= e.data.estilo_consola_secundario_fondo_color;
			$scope.configuracion.estilo_consola_secundario_texto_color 	= e.data.estilo_consola_secundario_texto_color;
			//LOGO 1
			if(e.data.estilo_consola_logo1_archivo != null){
				$scope.dir.ec_logo1 	= e.data.estilo_consola_logo1_archivo.nombre_logico;
				$scope.dir.ec_logo1_id 	= e.data.estilo_consola_logo1_archivo.id;
			}else{
				$scope.dir.ec_logo1_id 	= null;
			}
			//LOGO 2
			if(e.data.estilo_consola_logo2_archivo != null){
				$scope.dir.ec_logo2 	= e.data.estilo_consola_logo2_archivo.nombre_logico;
				$scope.dir.ec_logo2_id 	= e.data.estilo_consola_logo1_archivo.id;
			}else{
				$scope.dir.ec_logo1_id 	= null;
			}
			//Mostrar el Ligthbox
			$scope.showModal 	= true;

		});
		//metodos
		angular.extend( $scope, {
			doConsola: function(nameForm){
				var logo1 = $scope.dir.file_logo1;
				var logo2 = $scope.dir.file_logo2;
				$scope.configuracion.estilo_consola_logo1_archivo = $scope.dir.ec_logo1_id;
				$scope.configuracion.estilo_consola_logo2_archivo = $scope.dir.ec_logo2_id; 

				$q.all(
					[
						upload.uploadFile(
							logo1, 
							$scope.configuracion.estilo_consola_logo1_archivo
						).then(function(res){
							if(res.data.data.length > 0){
								$scope.configuracion.estilo_consola_logo1_archivo = res.data.data[0];
							}
						}),
						upload.uploadFile(
							logo2, 
							$scope.configuracion.estilo_consola_logo2_archivo
						).then(function(res){
							if(res.data.data.length > 0){
								$scope.configuracion.estilo_consola_logo2_archivo = res.data.data[0];
							}
						}),
					]
				).then(function(){
					//console.log($scope.configuracion);
					configuracionModel.post($scope.configuracion).success(function(data){	
						console.log(data);
					});
				});
				
			},

			close: function(){
				$uibModalInstance.dismiss('cancel');
			}
		});
	
}]);
qmatiq.controller('deleteModal', ['$scope', '$uibModalInstance', 'Item',
	function($scope, $uibModalInstance, Item){
		$scope.nombre = Item;
		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			delete: function(){
				$uibModalInstance.close(true);
			}
		});
	}
]);
//# sourceMappingURL=modals.js.map
