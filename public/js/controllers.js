qmatiq.controller('loginController', ['$scope', '$location', 'userModel', 
	function($scope, $location, userModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Login';
		//variables
		angular.extend($scope, {
			login : {},
			showCargando : true,
		});
		//metodos
		angular.extend($scope, {
			doLogin : function(loginForm){
				var data = {
					login 	: $scope.login.login,
					clave 	: $scope.login.clave,
					codigo 	: $scope.login.codigo,
				};
				userModel.doLogin(data).then(function(){
					$location.path('/home');
				});
			}
		});
	}
]);
qmatiq.controller('globalController', ['$scope', '$location', '$q', 'listServices',
	function($scope, $location, $q, listServices){
		$scope.global = {};
		$scope.global.navHead 	= 'templates/partials/nav_header.html';
		$scope.global.navUrl 	= 'templates/partials/nav_sidebar.html';
		$scope.global.loading 	= 'templates/partials/cargando.html';
		//cambiando encabezados de paginas
		$scope.nameProject = 'Qmatiq - ';
		//Cargando todas las listas
		$q.all(
			[
				listServices.getRolAll(),
				listServices.getUsuarioAll(),
				listServices.getLocalAll(),
				listServices.getConfiguracionAll(),
			]
		).then(function(response){
			$scope.roles 				= response[0].data.data;
			$scope.usuarios 			= response[1].data.data;
			$scope.locales 				= response[2].data.data;
			$scope.configuraciones 		= response[3].data.data;
			//combobox locales - usuarios
			$scope.selectedLocal = 0;
			//deshabilitando cargadores
			$scope.cargando 				= 'Cargando ...';
			$scope.showCargando 			= true;
			$scope.showCargandoUsuarios 	= true;
		});
	}
]);
qmatiq.controller('headController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){
	//variables
	angular.extend($scope, {
		user: userModel.getUserObject(),
		navHead: [],
	});
	//metodos
	angular.extend($scope, {
		doLogout : function(){
			userModel.doUserLogout();
			$location.path('/');
		}
	});
}]);
qmatiq.controller('navController', ['$scope', '$location', function($scope, $location){
	//variables
	angular.extend($scope, {
		navUrl: [
			{
				url: '/configuracion',
				ico: '<i class="fa fa-gear"></i>',
				subMenu: [
					{
						link: 'Configuración',
						url: '/configuracion',
					},
					{
						link: 'Roles',
						url: '/configuracion/roles',
					},
					{
						link: 'Usuarios',
						url: '/configuracion/usuarios',
					},
					{
						link: 'Lógica de Kioscos',
						url: '/configuracion/logica_de_kioscos',
					},
					{
						link: 'Estilos',
						url: '/configuracion/estilos',
					},
					{
						link: 'Seguridad',
						url: '/configuracion/seguridad',
					},
					{
						link: 'Peticiones de acceso',
						ico: '<i class="fa fa-exclamation fc_ed7d7d"></i>',
						url: '/configuracion/peticiones_de_acceso',
					}
				]
			},
			{
				url: '/planificacion',
				ico: '<i class="fa fa-flask"></i>',
				subMenu: [
					{
						link: 'Planificación',
						url: '/planificacion',
					},
					{
						link: 'Locales / Kioscos',
						url: '/planificacion/locales_kioscos',
					},
					{
						link: 'Clientes y jerarquías',
						url: '/planificacion/clientes_y_jerarquias',
					},
					{
						link: 'Grupos de atención',
						url: '/planificacion/grupos_de_atencion',
					},
					{
						link: 'Lógica',
						url: '/planificacion/logica',
					}
				]
			},
			/*{
				url: '/video',
				ico: '<i class="fa fa-film"></i>',
				subMenu: [
					{
						link: 'Video',
						url: '/video',
					},
					{
						link: 'Playlist locales',
						url: '/video/playlist_locales',
					},
					{
						link: 'Playlist de Youtube',
						url: '/video/playlist_de_youtube',
					}
				]
			},*/
			{
				url: '/atencion',
				ico: '<i class="fa fa-hand-o-right"></i>',
				subMenu: [
					{
						link: 'Atención',
						url: '/atencion',
					},
					{
						link: 'Módulo de atención',
						url: '/atencion/modulo_de_atencion',
					},
					{
						link: 'Supervisión',
						url: '/atencion/supervision',
					},
					{
						link: 'Criterios de atención',
						url: '/atencion/criterios_de_atencion',
					},
					{
						link: 'Mensajes de alerta',
						url: '/atencion/mensajes_de_alerta',
					}
				]
			},
			{
				url: '/reportes',
				ico: '<i class="fa fa-bar-chart"></i>',
				subMenu: [
					{
						link: 'Reportes',
						url: '/reportes',
					},
					{
						link: 'Alcance de turnos',
						url: '/reportes/alcance_de_turnos',
					},
					{
						link: 'Origen de los turnos',
						url: '/reportes/origen_de_los_turnos',
					},
					{
						link: 'Promedio de atención',
						url: '/reportes/promedio_de_atencion',
					},
					{
						link: 'Frecuencia por trámite',
						url: '/reportes/frecuencia_por_tramite',
					},
					{
						link: 'Saturación',
						url: '/reportes/saturacion',
					}
				]
			}
		]
	});
	//metodos
	angular.extend($scope, {
		ActiveLink: function(routeLink){
			if($location.path() == routeLink){
				return 'active';
			}
		},
		ActiveLinkPadre: function(link){
			var subMenu = $location.path().split('/',2);
			if( link == '/'+subMenu[1] ){
				return 'active_padre';
			}
		},
		LinkFirst : function(key){
			if(key == 0){
				return 'fs_18';
			}
		},
	});
}]);
qmatiq.controller('homeController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Home';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('configuracionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Configuración';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
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
qmatiq.controller('usuariosController', ['$scope', '$uibModal', 'usuarioModel',
	function($scope, $uibModal, usuarioModel){
		//cambiando el titulo de pagina
		$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Usuarios';//Metodos

		angular.extend( $scope, {
			changeList: function(){
				$scope.$parent.showCargandoUsuarios = false;
				usuarioModel.getAll($scope.selectedLocal).success(function(response){
					$scope.$parent.selectedLocal 		= $scope.selectedLocal;
					if(response.data.length != 0){
						$scope.$parent.cargando = 'Cargando...';
						$scope.$parent.usuarios 			= response.data;
						$scope.$parent.showCargandoUsuarios = true;
					}else{
						$scope.$parent.cargando = 'No existen usuarios en este Local';
					}
				});
			},
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
					usuarioModel.getAll($scope.selectedLocal).success(function(response){
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
qmatiq.controller('logicakioscosController', ['$scope', 'logicaKModel', 'recursos', '$timeout', function($scope, logicaKModel, recursos, $timeout){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Lógica de kioscos';
	
	// metodos
	angular.extend($scope, {
		changeCheck: function(acceso){
			return recursos.changeCheck(acceso);
		},
		changeLectura: function(key_obj, acceso){
			return $scope.$parent.configuraciones[key_obj] = recursos.changeAcceso(acceso);
		},
		doLogicaK: function(LogicaKForm){
			//console.log($scope.$parent.configuraciones);
			logicaKModel.post($scope.$parent.configuraciones).success(function(){
				$scope.showAlert = true;
				$scope.alerta	 = 'alert-success text-center';
				$scope.alerts 	 = [{ mensaje: 'DATOS GUARDADOS' }];
				//efecto de desvanecimiento
				$timeout(function(){
					$scope.showAlert 	= false;
				}, 1000);
				//elimina la etiqueta
				$timeout (function(){
					$scope.alerts.splice(0,1);
				}, 3000);
			});
		}
	});

}]);
qmatiq.controller('estilosController', ['$scope', '$uibModal', 
	function($scope, $uibModal){

	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Estilos';

	//Alertas: Recibe pedido enviado por seguridadConsolaModal.js para mostrar alerta
    $scope.$on('mostrar-alerta', function(event, args) {
    	$scope.mostrarAlerta(args);
	});

	//Metodos
	angular.extend( $scope, {
		showConsole: function(){
			var modalInstance = $uibModal.open( $scope.templatesConsole() );
		},
		showBienvenida: function(){
			var modalInstance = $uibModal.open( $scope.templatesBienvenida() );
		},
		showIdentificacion: function(){
			var modalInstance = $uibModal.open( $scope.templatesIdentificacion() );
		},
		showEscaneo: function(){
			var modalInstance = $uibModal.open( $scope.templatesEscaneo() );
		},
		showMenu: function(){
			var modalInstance = $uibModal.open( $scope.templatesMenu() );
		},
		showVideo: function(){
			var modalInstance = $uibModal.open( $scope.templatesVideo() );
		},
		showMobile: function(){
			var modalInstance = $uibModal.open( $scope.templatesMobile() );
		},
		templatesConsole: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_consola.html',
				controller: 'estiloConsolaModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesBienvenida: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_bienvenida.html',
				controller: 'estiloBienvenidaModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesIdentificacion: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_identificacion.html',
				controller: 'estiloIdentificacionModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesEscaneo: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_escaneos.html',
				controller: 'estiloEscaneoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesMenu: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_menu_administracion.html',
				controller: 'estiloMenuModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesVideo: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_video.html',
				controller: 'estiloVideoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesMobile: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/estilos_mobile.html',
				controller: 'estiloMobileModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		mostrarAlerta: function(args){
			$scope.showAlert = true;
			$scope.alerta	 = 'alert-success text-center';
			$scope.alerts 	 = [{ mensaje: args }];
			//efecto de desvanecimiento
			$timeout(function(){
				$scope.showAlert 	= false;
			}, 1500);
			//elimina la etiqueta
			$timeout (function(){
				$scope.alerts.splice(0,1);
			}, 3000);
		}
	});
}]);
qmatiq.controller('seguridadController', ['$scope', '$rootScope', '$uibModal', '$timeout', 
	function($scope, $rootScope, $uibModal, $timeout){

	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Seguridad';

	//Alertas: Recibe pedido enviado por seguridadConsolaModal.js para mostrar alerta
    $scope.$on('mostrar-alerta', function(event, args) {
    	$scope.mostrarAlerta(args);
	});

	//Metodos
	angular.extend( $scope, {
		showSeguridadConsola: function(){
			var modalInstance = $uibModal.open( $scope.templatesConsola() );
		},
		showSeguridadKiosco: function(){
			var modalInstance = $uibModal.open( $scope.templatesKiosco() );
		},
		setearFrecuencia: function(tipoFrecuencia, dias){
			var respuesta = "";
			//console.log("tipoFrecuencia:" + tipoFrecuencia);
			if (tipoFrecuencia == 0) {
				respuesta = "Nunca actualizar";
			} else if (tipoFrecuencia == 1) {
				respuesta = "Una vez al mes";
			} else if (tipoFrecuencia == 2) {
				respuesta = "Una vez a la semana";
			} else if (tipoFrecuencia == 3) {
				respuesta = "Una vez al día";
			} else if (tipoFrecuencia == 4) {
				respuesta = "Actualizar cada " + dias + " días";
			}
			return respuesta;
		},
		templatesConsola: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/seguridad_consola.html',
				controller: 'seguridadConsolaModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog-seguridad',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		templatesKiosco: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/seguridad_kiosco.html',
				controller: 'seguridadKioscoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog-seguridad',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		},
		mostrarAlerta: function(args){
			$scope.showAlert = true;
			$scope.alerta	 = 'alert-success text-center';
			$scope.alerts 	 = [{ mensaje: args }];
			//efecto de desvanecimiento
			$timeout(function(){
				$scope.showAlert 	= false;
			}, 1500);
			//elimina la etiqueta
			$timeout (function(){
				$scope.alerts.splice(0,1);
			}, 3000);
		}
	});
}]);
qmatiq.controller('peticionesController', ['$scope', '$rootScope', '$uibModal', '$timeout', 
	function($scope, $rootScope, $uibModal, $timeout){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Peticiones de acceso';
	//quitando el show Cargando
	$scope.showCargando = true;

	//Alertas: Recibe pedido enviado por seguridadConsolaModal.js para mostrar alerta
    $scope.$on('mostrar-alerta', function(event, type, message) {
    	$scope.mostrarAlerta(type, message);
	});

	//Metodos
	angular.extend( $scope, {
		showPeticionesDeAcceso: function(){
			var modalInstance = $uibModal.open( $scope.templates() );
		},
		mostrarAlerta: function(type, message){
			$scope.showAlert = true;
			$scope.alerta	 = type + ' text-center';
			$scope.alerts 	 = [{ mensaje: message }];
			//efecto de desvanecimiento
			$timeout(function(){
				$scope.showAlert 	= false;
			}, 1500);
			//elimina la etiqueta
			$timeout (function(){
				$scope.alerts.splice(0,1);
			}, 3000);
		},
		templates: function(){
			return templates = {
				templateUrl: 'templates/configuracion/modales/peticiones_de_acceso.html',
				controller: 'peticionesDeAccesoModal',
				windowClass: 'modal-predeterminado',
				size: 'estilo-dialog-peticiones',
				resolve: {
					Item: function(){
						return $scope.$parent.configuraciones;
					}
				}
			}
		}
	});
}]);
qmatiq.controller('planificacionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Planificación';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('localeskioscosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Locales / Kioscos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('clientesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Clientes y Jerarquías';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('gruposController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Grupos de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('logicaController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Lógica';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('videoController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Video';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('playlocalesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Playlist locales';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('playyoutubeController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Playlist de Youtube';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('atencionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('moduloController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Módulo de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('supervisionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Supervisión';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('criteriosController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Criterios de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('mensajesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Mensajes de alerta';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('reportesController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Reportes';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('alcanceController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Alcance de turnos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('origenController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Origen de los turnos';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('promedioController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Promedio de atención';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('frecuenciaController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Frecuencia por trámite';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
qmatiq.controller('saturacionController', ['$scope', function($scope){
	//cambiando el titulo de pagina
	$scope.$parent.headTitulo = $scope.$parent.nameProject + 'Saturación';
	//quitando el show Cargando
	$scope.showCargando = true;
}]);
//# sourceMappingURL=controllers.js.map
