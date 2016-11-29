qmatiq.controller('estilosController', ['$scope', '$uibModal', function($scope, $uibModal){
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
