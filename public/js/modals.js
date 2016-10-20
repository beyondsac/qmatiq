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
	'recursos', 
	'constante', function(
		$scope, 
		$uibModalInstance, 
		Item, 
		recursos, 
		constante){

		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
		});

		$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
	
}]);
qmatiq.controller('seguridadConsolaModal', ['$scope', '$rootScope', 'segConsolaModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, segConsolaModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doSegConsola: function(segConsolaForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				var data={
					seguridad_codigo_autenticacion_tipo: $scope.configuraciones.seguridad_codigo_autenticacion_tipo,
					seguridad_codigo_autenticacion_dias: $scope.configuraciones.seguridad_codigo_autenticacion_dias,
					seguridad_codigo_autenticacion_fecha: $scope.configuraciones.seguridad_codigo_autenticacion_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_autenticacion_tipo = $scope.configuraciones.seguridad_codigo_autenticacion_tipo;
				Item.seguridad_codigo_autenticacion_dias = $scope.configuraciones.seguridad_codigo_autenticacion_dias;
				Item.seguridad_codigo_autenticacion_fecha = $scope.configuraciones.seguridad_codigo_autenticacion_fecha;
				//Actualizo la nueva configuración en el API
				segConsolaModel.post(data).success(function(respuesta){
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var mensaje = "Actualización guardada con éxito";
					$rootScope.$broadcast('mostrar-alerta', mensaje);
					$uibModalInstance.dismiss('cancel');
				});
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('seguridadKioscoModal', ['$scope', '$rootScope', 'segKioscoModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, segKioscoModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		$scope.configuraciones.seguridad_codigo_kiosco_tipo = Item.seguridad_codigo_kiosco_tipo;
		$scope.configuraciones.seguridad_codigo_kiosco_dias = Item.seguridad_codigo_kiosco_dias;
		$scope.configuraciones.seguridad_codigo_kiosco_fecha = Item.seguridad_codigo_kiosco_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doSegKiosco: function(segKioscoForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				var data={
					seguridad_codigo_kiosco_tipo: $scope.configuraciones.seguridad_codigo_kiosco_tipo,
					seguridad_codigo_kiosco_dias: $scope.configuraciones.seguridad_codigo_kiosco_dias,
					seguridad_codigo_kiosco_fecha: $scope.configuraciones.seguridad_codigo_kiosco_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_kiosco_tipo = $scope.configuraciones.seguridad_codigo_kiosco_tipo;
				Item.seguridad_codigo_kiosco_dias = $scope.configuraciones.seguridad_codigo_kiosco_dias;
				Item.seguridad_codigo_kiosco_fecha = $scope.configuraciones.seguridad_codigo_kiosco_fecha;
				//Actualizo la nueva configuración en el API
				segKioscoModel.post(data).success(function(respuesta){
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var mensaje = "Actualización guardada con éxito";
					$rootScope.$broadcast('mostrar-alerta', mensaje);
					$uibModalInstance.dismiss('cancel');
				});
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
//TODO: peticionesModel TODAVIA NO JALA LA DATA CORRECTA
qmatiq.controller('peticionesDeAccesoModal', ['$scope', '$rootScope', 'peticionesModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, peticionesModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});

		//Acciones disponibles en "Seleccionar acción"
		$scope.acciones = [{
			value: 'aceptar',
			label: 'Aceptar petición',
			selected: 'selected'
		}, {
			value: 'rechazar',
			label: 'Rechazar petición'
		}];
		$scope.listaAcciones = $scope.acciones[0];//Acetar petición aparecerá como preseleccionado

		//Instanciando variables
		//$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		//$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		//$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doPeticiones: function(peticionesForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*
				var data={
					seguridad_codigo_autenticacion_tipo: $scope.configuraciones.seguridad_codigo_autenticacion_tipo,
					seguridad_codigo_autenticacion_dias: $scope.configuraciones.seguridad_codigo_autenticacion_dias,
					seguridad_codigo_autenticacion_fecha: $scope.configuraciones.seguridad_codigo_autenticacion_fecha
				};
				//Seteo nuevos valores para 'Item' con la nueva configuración del usuario
				Item.seguridad_codigo_autenticacion_tipo = $scope.configuraciones.seguridad_codigo_autenticacion_tipo;
				Item.seguridad_codigo_autenticacion_dias = $scope.configuraciones.seguridad_codigo_autenticacion_dias;
				Item.seguridad_codigo_autenticacion_fecha = $scope.configuraciones.seguridad_codigo_autenticacion_fecha;
				//Actualizo la nueva configuración en el API
				peticionesModel.post(data).success(function(respuesta){*/
					//console.log(respuesta);

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					//var aceptar = true;//TODO: ESTA VARIABLE DEBE TOMAR EL VALOR SELECCIONADO POR EL USUARIO
					var tipo;
					var mensaje;
					if ($scope.listaAcciones.value == "aceptar") {
						tipo = "alert-success";
						mensaje = "Petición de acceso aceptada";
					} else {
						tipo = "alert-danger";
						mensaje = "Petición de acceso rechazada";
					}
					$rootScope.$broadcast('mostrar-alerta', tipo, mensaje);
					$uibModalInstance.dismiss('cancel');
				/*});
				*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
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
