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

qmatiq.controller('estiloBienvenidaModal', ['$scope', '$rootScope', 'estBienvenidaModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estBienvenidaModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		$scope.includeImagenes = "templates/configuracion/modales/bienvenida/imagenes.html";
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstBienvenida: function(estBienvenidaForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('estiloIdentificacionModal', ['$scope', '$rootScope', 'estIdentificacionModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estIdentificacionModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstIdentificacion: function(estIdentificacionForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('estiloEscaneoModal', ['$scope', '$rootScope', 'estEscaneoModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estEscaneoModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstEscaneo: function(estEscaneoForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('estiloMenuModal', ['$scope', '$rootScope', 'estMenuModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estMenuModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstMenu: function(estMenuForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('estiloVideoModal', ['$scope', '$rootScope', 'estVideoModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estVideoModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstVideo: function(estVideoForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
}]);
qmatiq.controller('estiloMobileModal', ['$scope', '$rootScope', 'estMobileModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, estMobileModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {}
		});
		//Instanciando variables
		/*$scope.configuraciones.seguridad_codigo_autenticacion_tipo = Item.seguridad_codigo_autenticacion_tipo;
		$scope.configuraciones.seguridad_codigo_autenticacion_dias = Item.seguridad_codigo_autenticacion_dias;
		$scope.configuraciones.seguridad_codigo_autenticacion_fecha = Item.seguridad_codigo_autenticacion_fecha;*/

		//metodos
		angular.extend($scope, {
			close: function(){
				$uibModalInstance.dismiss('cancel');
			},
			doEstMobile: function(estMobileForm){
				//console.log(Item);
				//Guardo la nueva configuración en la variable data
				/*var data={
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
				});*/
			}
		});
		//$scope.customSettings = {position: 'top right',letterCase: 'uppercase'};
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
qmatiq.controller('peticionesDeAccesoModal', ['$scope', '$rootScope', '$http', 'peticionesModel', '$uibModalInstance', 'Item', 'recursos', 'constante', '$timeout',
	function($scope, $rootScope, $http, peticionesModel, $uibModalInstance, Item, recursos, constante, $timeout){
		//variables angularjs
		angular.extend( $scope, {
			showModal: true,
			configuraciones: {},
			composeEmail: {}
		});

		//Acciones disponibles en "Seleccionar acción"
		$scope.acciones = [{
			value: 'aceptada',
			label: 'Aceptar petición',
			selected: 'selected'
		}, {
			value: 'rechazada',
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

					//Seteo de variables de correo
					var name = "Ricardo Echecopar";
					var to = "holmestreepartnersllc@gmail.com";
					var subject = "Su petición de acceso a Qmatiq Console ha sido " + $scope.listaAcciones.value;
					var adm = "echecopar@piensamasalla.com";

					var eSaludo;
					var eContenido;
					var eComentario;
					var eAccion;
					var eDespedida;
					var eCierre;

					if ($scope.listaAcciones.value == "aceptada") {
						eSaludo = "Hola " + name + ",";
						eContenido = "Tu petición para ingresar a Qmatiq Console ha sido aceptada por el administrador";
						eAccion = "Ingresar a Qmatiq";
						eDespedida = "Recuerda que para ingresar al sistema necesitarás tu usuario, contraseña y código de autenticación.";
						eCierre = "Gracias por esperar.";
					}else{
						eSaludo = "Hola " + name + ",";
						eContenido = "Hemos detectado un intento de ingresar a Qmatiq con tu cuenta desde una dirección desconocida. Esta petición no autorizada ha sido rechazada";
						eAccion = "";
						eDespedida = "Por favor contáctate con el administrador si necesitas mayor información.";
						//eDespedida = "Por favor contáctate con el <a href='mailto:{{ $data->adm }}?subject=Acceso a Qmatiq Console' style='text-decoration: underline;'>administrador</a> si necesitas mayor información.";
						eCierre = "Equipo Qmatiq";
					}

					if ($scope.composeEmail.body == undefined) {
						$scope.composeEmail.body = "";
						eComentario = ".";
					}else{
						eComentario = " con el siguiente comentario:";
					}

					$scope.composeEmail = {
						'name': name,
						'to': to,
						'subject': subject,
						'body': $scope.composeEmail.body,
						'status': $scope.listaAcciones.value,
						'adm': adm,
						'eSaludo': eSaludo,
						'eContenido': eContenido,
						'eComentario': eComentario,
						'eAccion': eAccion,
						'eDespedida': eDespedida,
						'eCierre': eCierre
					};
					//console.log($scope.composeEmail.to + "  " + $scope.composeEmail.subject + "  " + $scope.composeEmail.body);

				   	$http({
						headers: {
							//'Content-Type': 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
							//'Accept': 'application/json',
							//'x-csrf-token': constante.CSRF_TOKEN
						},
						url : 'http://localhost/qmatiq/public/enviarCorreo',
						method : 'POST',
						data : $scope.composeEmail
					});/*.success(function(respuesta){
						console.log(respuesta);
					}).error(function(err){
						console.log(err);
					});*/

					//Envío de correo con aplicación seleccionada
					/*var link = "mailto:"+ $scope.composeEmail.to
				             + "?subject=" + $scope.composeEmail.subject
				             + "&body=" + $scope.composeEmail.body; 
				    window.location.href = link;*/

					//Alertas: Prepara el mensaje de alerta y lo ejecuta en seguridadController.js
					var tipo;
					var mensaje;
					if ($scope.listaAcciones.value == "aceptada") {
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
